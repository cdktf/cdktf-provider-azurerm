// https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisLinkedServerConfig extends cdktf.TerraformMetaArguments {
  readonly linkedRedisCacheId: string;
  readonly linkedRedisCacheLocation: string;
  readonly resourceGroupName: string;
  readonly serverRole: string;
  readonly targetRedisCacheName: string;
  /** timeouts block */
  readonly timeouts?: RedisLinkedServerTimeouts;
}
export interface RedisLinkedServerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function redisLinkedServerTimeoutsToTerraform(struct?: RedisLinkedServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class RedisLinkedServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RedisLinkedServerConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_linked_server',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._linkedRedisCacheId = config.linkedRedisCacheId;
    this._linkedRedisCacheLocation = config.linkedRedisCacheLocation;
    this._resourceGroupName = config.resourceGroupName;
    this._serverRole = config.serverRole;
    this._targetRedisCacheName = config.targetRedisCacheName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // linked_redis_cache_id - computed: false, optional: false, required: true
  private _linkedRedisCacheId: string;
  public get linkedRedisCacheId() {
    return this.getStringAttribute('linked_redis_cache_id');
  }
  public set linkedRedisCacheId(value: string) {
    this._linkedRedisCacheId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRedisCacheIdInput() {
    return this._linkedRedisCacheId
  }

  // linked_redis_cache_location - computed: false, optional: false, required: true
  private _linkedRedisCacheLocation: string;
  public get linkedRedisCacheLocation() {
    return this.getStringAttribute('linked_redis_cache_location');
  }
  public set linkedRedisCacheLocation(value: string) {
    this._linkedRedisCacheLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRedisCacheLocationInput() {
    return this._linkedRedisCacheLocation
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // server_role - computed: false, optional: false, required: true
  private _serverRole: string;
  public get serverRole() {
    return this.getStringAttribute('server_role');
  }
  public set serverRole(value: string) {
    this._serverRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRoleInput() {
    return this._serverRole
  }

  // target_redis_cache_name - computed: false, optional: false, required: true
  private _targetRedisCacheName: string;
  public get targetRedisCacheName() {
    return this.getStringAttribute('target_redis_cache_name');
  }
  public set targetRedisCacheName(value: string) {
    this._targetRedisCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRedisCacheNameInput() {
    return this._targetRedisCacheName
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisLinkedServerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RedisLinkedServerTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      linked_redis_cache_id: cdktf.stringToTerraform(this._linkedRedisCacheId),
      linked_redis_cache_location: cdktf.stringToTerraform(this._linkedRedisCacheLocation),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      server_role: cdktf.stringToTerraform(this._serverRole),
      target_redis_cache_name: cdktf.stringToTerraform(this._targetRedisCacheName),
      timeouts: redisLinkedServerTimeoutsToTerraform(this._timeouts),
    };
  }
}
