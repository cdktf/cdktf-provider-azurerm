// https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisLinkedServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#linked_redis_cache_id RedisLinkedServer#linked_redis_cache_id}
  */
  readonly linkedRedisCacheId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#linked_redis_cache_location RedisLinkedServer#linked_redis_cache_location}
  */
  readonly linkedRedisCacheLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#resource_group_name RedisLinkedServer#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#server_role RedisLinkedServer#server_role}
  */
  readonly serverRole: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#target_redis_cache_name RedisLinkedServer#target_redis_cache_name}
  */
  readonly targetRedisCacheName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#timeouts RedisLinkedServer#timeouts}
  */
  readonly timeouts?: RedisLinkedServerTimeouts;
}
export interface RedisLinkedServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#create RedisLinkedServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#delete RedisLinkedServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#read RedisLinkedServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html#update RedisLinkedServer#update}
  */
  readonly update?: string;
}

function redisLinkedServerTimeoutsToTerraform(struct?: RedisLinkedServerTimeoutsOutputReference | RedisLinkedServerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class RedisLinkedServerTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html azurerm_redis_linked_server}
*/
export class RedisLinkedServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_redis_linked_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/redis_linked_server.html azurerm_redis_linked_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisLinkedServerConfig
  */
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
  private _linkedRedisCacheId?: string; 
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
  private _linkedRedisCacheLocation?: string; 
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
  private _resourceGroupName?: string; 
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
  private _serverRole?: string; 
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
  private _targetRedisCacheName?: string; 
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
  private _timeouts?: RedisLinkedServerTimeouts | undefined; 
  private __timeoutsOutput = new RedisLinkedServerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: RedisLinkedServerTimeouts | undefined) {
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
