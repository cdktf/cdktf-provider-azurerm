// https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisEnterpriseDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#client_protocol RedisEnterpriseDatabase#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#cluster_id RedisEnterpriseDatabase#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#clustering_policy RedisEnterpriseDatabase#clustering_policy}
  */
  readonly clusteringPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#eviction_policy RedisEnterpriseDatabase#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#name RedisEnterpriseDatabase#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#port RedisEnterpriseDatabase#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#resource_group_name RedisEnterpriseDatabase#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * module block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#module RedisEnterpriseDatabase#module}
  */
  readonly module?: RedisEnterpriseDatabaseModule[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#timeouts RedisEnterpriseDatabase#timeouts}
  */
  readonly timeouts?: RedisEnterpriseDatabaseTimeouts;
}
export interface RedisEnterpriseDatabaseModule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#args RedisEnterpriseDatabase#args}
  */
  readonly args?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#name RedisEnterpriseDatabase#name}
  */
  readonly name: string;
}

function redisEnterpriseDatabaseModuleToTerraform(struct?: RedisEnterpriseDatabaseModule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    args: cdktf.stringToTerraform(struct!.args),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface RedisEnterpriseDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#create RedisEnterpriseDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#delete RedisEnterpriseDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html#read RedisEnterpriseDatabase#read}
  */
  readonly read?: string;
}

function redisEnterpriseDatabaseTimeoutsToTerraform(struct?: RedisEnterpriseDatabaseTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html azurerm_redis_enterprise_database}
*/
export class RedisEnterpriseDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_redis_enterprise_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/redis_enterprise_database.html azurerm_redis_enterprise_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisEnterpriseDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RedisEnterpriseDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_redis_enterprise_database',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clientProtocol = config.clientProtocol;
    this._clusterId = config.clusterId;
    this._clusteringPolicy = config.clusteringPolicy;
    this._evictionPolicy = config.evictionPolicy;
    this._name = config.name;
    this._port = config.port;
    this._resourceGroupName = config.resourceGroupName;
    this._module = config.module;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_protocol - computed: false, optional: true, required: false
  private _clientProtocol?: string;
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string ) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // clustering_policy - computed: false, optional: true, required: false
  private _clusteringPolicy?: string;
  public get clusteringPolicy() {
    return this.getStringAttribute('clustering_policy');
  }
  public set clusteringPolicy(value: string ) {
    this._clusteringPolicy = value;
  }
  public resetClusteringPolicy() {
    this._clusteringPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringPolicyInput() {
    return this._clusteringPolicy
  }

  // eviction_policy - computed: false, optional: true, required: false
  private _evictionPolicy?: string;
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string ) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // port - computed: false, optional: true, required: false
  private _port?: number;
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number ) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // primary_access_key - computed: true, optional: false, required: false
  public get primaryAccessKey() {
    return this.getStringAttribute('primary_access_key');
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

  // secondary_access_key - computed: true, optional: false, required: false
  public get secondaryAccessKey() {
    return this.getStringAttribute('secondary_access_key');
  }

  // module - computed: false, optional: true, required: false
  private _module?: RedisEnterpriseDatabaseModule[];
  public get module() {
    return this.interpolationForAttribute('module') as any;
  }
  public set module(value: RedisEnterpriseDatabaseModule[] ) {
    this._module = value;
  }
  public resetModule() {
    this._module = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RedisEnterpriseDatabaseTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: RedisEnterpriseDatabaseTimeouts ) {
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
      client_protocol: cdktf.stringToTerraform(this._clientProtocol),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      clustering_policy: cdktf.stringToTerraform(this._clusteringPolicy),
      eviction_policy: cdktf.stringToTerraform(this._evictionPolicy),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      module: cdktf.listMapper(redisEnterpriseDatabaseModuleToTerraform)(this._module),
      timeouts: redisEnterpriseDatabaseTimeoutsToTerraform(this._timeouts),
    };
  }
}
