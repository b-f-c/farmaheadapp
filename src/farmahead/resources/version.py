import logging; log=logging.getLogger(__name__)
from flask import current_app
from flask import request, jsonify
from flask_restful import Resource
import git


class VersionResource(Resource):
    def get(self):
        repo = git.Repo(search_parent_directories=True)
        sha = repo.head.object.hexsha
        env = current_app.config.get('ENV')
        ver = current_app.config.get('APP_VERSION')
        return jsonify(sha=sha, env=env, version=ver)
