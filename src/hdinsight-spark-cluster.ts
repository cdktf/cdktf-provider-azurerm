// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightSparkClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#cluster_version HdinsightSparkCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#encryption_in_transit_enabled HdinsightSparkCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#location HdinsightSparkCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#name HdinsightSparkCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#resource_group_name HdinsightSparkCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#tags HdinsightSparkCluster#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#tier HdinsightSparkCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#tls_min_version HdinsightSparkCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#component_version HdinsightSparkCluster#component_version}
  */
  readonly componentVersion: HdinsightSparkClusterComponentVersion;
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#gateway HdinsightSparkCluster#gateway}
  */
  readonly gateway: HdinsightSparkClusterGateway;
  /**
  * metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#metastores HdinsightSparkCluster#metastores}
  */
  readonly metastores?: HdinsightSparkClusterMetastores;
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#monitor HdinsightSparkCluster#monitor}
  */
  readonly monitor?: HdinsightSparkClusterMonitor;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#network HdinsightSparkCluster#network}
  */
  readonly network?: HdinsightSparkClusterNetwork;
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#roles HdinsightSparkCluster#roles}
  */
  readonly roles: HdinsightSparkClusterRoles;
  /**
  * security_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#security_profile HdinsightSparkCluster#security_profile}
  */
  readonly securityProfile?: HdinsightSparkClusterSecurityProfile;
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_account HdinsightSparkCluster#storage_account}
  */
  readonly storageAccount?: HdinsightSparkClusterStorageAccount[];
  /**
  * storage_account_gen2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_account_gen2 HdinsightSparkCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightSparkClusterStorageAccountGen2;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#timeouts HdinsightSparkCluster#timeouts}
  */
  readonly timeouts?: HdinsightSparkClusterTimeouts;
}
export interface HdinsightSparkClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#spark HdinsightSparkCluster#spark}
  */
  readonly spark: string;
}

function hdinsightSparkClusterComponentVersionToTerraform(struct?: HdinsightSparkClusterComponentVersionOutputReference | HdinsightSparkClusterComponentVersion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spark: cdktf.stringToTerraform(struct!.spark),
  }
}

export class HdinsightSparkClusterComponentVersionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // spark - computed: false, optional: false, required: true
  private _spark?: string; 
  public get spark() {
    return this.getStringAttribute('spark');
  }
  public set spark(value: string) {
    this._spark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark
  }
}
export interface HdinsightSparkClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#enabled HdinsightSparkCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterGatewayToTerraform(struct?: HdinsightSparkClusterGatewayOutputReference | HdinsightSparkClusterGateway): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HdinsightSparkClusterGatewayOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface HdinsightSparkClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#database_name HdinsightSparkCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#server HdinsightSparkCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterMetastoresAmbariToTerraform(struct?: HdinsightSparkClusterMetastoresAmbariOutputReference | HdinsightSparkClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HdinsightSparkClusterMetastoresAmbariOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface HdinsightSparkClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#database_name HdinsightSparkCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#server HdinsightSparkCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterMetastoresHiveToTerraform(struct?: HdinsightSparkClusterMetastoresHiveOutputReference | HdinsightSparkClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HdinsightSparkClusterMetastoresHiveOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface HdinsightSparkClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#database_name HdinsightSparkCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#server HdinsightSparkCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
}

function hdinsightSparkClusterMetastoresOozieToTerraform(struct?: HdinsightSparkClusterMetastoresOozieOutputReference | HdinsightSparkClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HdinsightSparkClusterMetastoresOozieOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface HdinsightSparkClusterMetastores {
  /**
  * ambari block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ambari HdinsightSparkCluster#ambari}
  */
  readonly ambari?: HdinsightSparkClusterMetastoresAmbari;
  /**
  * hive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#hive HdinsightSparkCluster#hive}
  */
  readonly hive?: HdinsightSparkClusterMetastoresHive;
  /**
  * oozie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#oozie HdinsightSparkCluster#oozie}
  */
  readonly oozie?: HdinsightSparkClusterMetastoresOozie;
}

function hdinsightSparkClusterMetastoresToTerraform(struct?: HdinsightSparkClusterMetastoresOutputReference | HdinsightSparkClusterMetastores): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambari: hdinsightSparkClusterMetastoresAmbariToTerraform(struct!.ambari),
    hive: hdinsightSparkClusterMetastoresHiveToTerraform(struct!.hive),
    oozie: hdinsightSparkClusterMetastoresOozieToTerraform(struct!.oozie),
  }
}

export class HdinsightSparkClusterMetastoresOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ambari - computed: false, optional: true, required: false
  private _ambari?: HdinsightSparkClusterMetastoresAmbari | undefined; 
  private __ambariOutput = new HdinsightSparkClusterMetastoresAmbariOutputReference(this as any, "ambari", true);
  public get ambari() {
    return this.__ambariOutput;
  }
  public putAmbari(value: HdinsightSparkClusterMetastoresAmbari | undefined) {
    this._ambari = value;
  }
  public resetAmbari() {
    this._ambari = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambariInput() {
    return this._ambari
  }

  // hive - computed: false, optional: true, required: false
  private _hive?: HdinsightSparkClusterMetastoresHive | undefined; 
  private __hiveOutput = new HdinsightSparkClusterMetastoresHiveOutputReference(this as any, "hive", true);
  public get hive() {
    return this.__hiveOutput;
  }
  public putHive(value: HdinsightSparkClusterMetastoresHive | undefined) {
    this._hive = value;
  }
  public resetHive() {
    this._hive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveInput() {
    return this._hive
  }

  // oozie - computed: false, optional: true, required: false
  private _oozie?: HdinsightSparkClusterMetastoresOozie | undefined; 
  private __oozieOutput = new HdinsightSparkClusterMetastoresOozieOutputReference(this as any, "oozie", true);
  public get oozie() {
    return this.__oozieOutput;
  }
  public putOozie(value: HdinsightSparkClusterMetastoresOozie | undefined) {
    this._oozie = value;
  }
  public resetOozie() {
    this._oozie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oozieInput() {
    return this._oozie
  }
}
export interface HdinsightSparkClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#log_analytics_workspace_id HdinsightSparkCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#primary_key HdinsightSparkCluster#primary_key}
  */
  readonly primaryKey: string;
}

function hdinsightSparkClusterMonitorToTerraform(struct?: HdinsightSparkClusterMonitorOutputReference | HdinsightSparkClusterMonitor): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export class HdinsightSparkClusterMonitorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey
  }
}
export interface HdinsightSparkClusterNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#connection_direction HdinsightSparkCluster#connection_direction}
  */
  readonly connectionDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#private_link_enabled HdinsightSparkCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean | cdktf.IResolvable;
}

function hdinsightSparkClusterNetworkToTerraform(struct?: HdinsightSparkClusterNetworkOutputReference | HdinsightSparkClusterNetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_direction: cdktf.stringToTerraform(struct!.connectionDirection),
    private_link_enabled: cdktf.booleanToTerraform(struct!.privateLinkEnabled),
  }
}

export class HdinsightSparkClusterNetworkOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // connection_direction - computed: false, optional: true, required: false
  private _connectionDirection?: string | undefined; 
  public get connectionDirection() {
    return this.getStringAttribute('connection_direction');
  }
  public set connectionDirection(value: string | undefined) {
    this._connectionDirection = value;
  }
  public resetConnectionDirection() {
    this._connectionDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDirectionInput() {
    return this._connectionDirection
  }

  // private_link_enabled - computed: false, optional: true, required: false
  private _privateLinkEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled') as any;
  }
  public set privateLinkEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled
  }
}
export interface HdinsightSparkClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ssh_keys HdinsightSparkCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#subnet_id HdinsightSparkCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#virtual_network_id HdinsightSparkCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#vm_size HdinsightSparkCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightSparkClusterRolesHeadNodeToTerraform(struct?: HdinsightSparkClusterRolesHeadNodeOutputReference | HdinsightSparkClusterRolesHeadNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export class HdinsightSparkClusterRolesHeadNodeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[] | undefined; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[] | undefined) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string | undefined; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string | undefined) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }
}
export interface HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#max_instance_count HdinsightSparkCluster#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#min_instance_count HdinsightSparkCluster#min_instance_count}
  */
  readonly minInstanceCount: number;
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference | HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}

export class HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_instance_count - computed: false, optional: false, required: true
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount
  }

  // min_instance_count - computed: false, optional: false, required: true
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount
  }
}
export interface HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#days HdinsightSparkCluster#days}
  */
  readonly days: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#target_instance_count HdinsightSparkCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#time HdinsightSparkCluster#time}
  */
  readonly time: string;
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#timezone HdinsightSparkCluster#timezone}
  */
  readonly timezone: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#schedule HdinsightSparkCluster#schedule}
  */
  readonly schedule: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[];
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference | HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: cdktf.listMapper(hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform)(struct!.schedule),
  }
}

export class HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[]; 
  public get schedule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('schedule') as any;
  }
  public set schedule(value: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[]) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule
  }
}
export interface HdinsightSparkClusterRolesWorkerNodeAutoscale {
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#capacity HdinsightSparkCluster#capacity}
  */
  readonly capacity?: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#recurrence HdinsightSparkCluster#recurrence}
  */
  readonly recurrence?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence;
}

function hdinsightSparkClusterRolesWorkerNodeAutoscaleToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference | HdinsightSparkClusterRolesWorkerNodeAutoscale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: hdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct!.capacity),
    recurrence: hdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct!.recurrence),
  }
}

export class HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity | undefined; 
  private __capacityOutput = new HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacityOutputReference(this as any, "capacity", true);
  public get capacity() {
    return this.__capacityOutput;
  }
  public putCapacity(value: HdinsightSparkClusterRolesWorkerNodeAutoscaleCapacity | undefined) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence | undefined; 
  private __recurrenceOutput = new HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(this as any, "recurrence", true);
  public get recurrence() {
    return this.__recurrenceOutput;
  }
  public putRecurrence(value: HdinsightSparkClusterRolesWorkerNodeAutoscaleRecurrence | undefined) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence
  }
}
export interface HdinsightSparkClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#min_instance_count HdinsightSparkCluster#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ssh_keys HdinsightSparkCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#subnet_id HdinsightSparkCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#target_instance_count HdinsightSparkCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#virtual_network_id HdinsightSparkCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#vm_size HdinsightSparkCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * autoscale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#autoscale HdinsightSparkCluster#autoscale}
  */
  readonly autoscale?: HdinsightSparkClusterRolesWorkerNodeAutoscale;
}

function hdinsightSparkClusterRolesWorkerNodeToTerraform(struct?: HdinsightSparkClusterRolesWorkerNodeOutputReference | HdinsightSparkClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    autoscale: hdinsightSparkClusterRolesWorkerNodeAutoscaleToTerraform(struct!.autoscale),
  }
}

export class HdinsightSparkClusterRolesWorkerNodeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // min_instance_count - computed: true, optional: true, required: false
  private _minInstanceCount?: number | undefined; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number | undefined) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[] | undefined; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[] | undefined) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // target_instance_count - computed: false, optional: false, required: true
  private _targetInstanceCount?: number; 
  public get targetInstanceCount() {
    return this.getNumberAttribute('target_instance_count');
  }
  public set targetInstanceCount(value: number) {
    this._targetInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInstanceCountInput() {
    return this._targetInstanceCount
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string | undefined; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string | undefined) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }

  // autoscale - computed: false, optional: true, required: false
  private _autoscale?: HdinsightSparkClusterRolesWorkerNodeAutoscale | undefined; 
  private __autoscaleOutput = new HdinsightSparkClusterRolesWorkerNodeAutoscaleOutputReference(this as any, "autoscale", true);
  public get autoscale() {
    return this.__autoscaleOutput;
  }
  public putAutoscale(value: HdinsightSparkClusterRolesWorkerNodeAutoscale | undefined) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale
  }
}
export interface HdinsightSparkClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#password HdinsightSparkCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ssh_keys HdinsightSparkCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#subnet_id HdinsightSparkCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#username HdinsightSparkCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#virtual_network_id HdinsightSparkCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#vm_size HdinsightSparkCluster#vm_size}
  */
  readonly vmSize: string;
}

function hdinsightSparkClusterRolesZookeeperNodeToTerraform(struct?: HdinsightSparkClusterRolesZookeeperNodeOutputReference | HdinsightSparkClusterRolesZookeeperNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export class HdinsightSparkClusterRolesZookeeperNodeOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: true, required: false
  private _password?: string | undefined; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[] | undefined; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[] | undefined) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string | undefined; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string | undefined) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string | undefined; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string | undefined) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }
}
export interface HdinsightSparkClusterRoles {
  /**
  * head_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#head_node HdinsightSparkCluster#head_node}
  */
  readonly headNode: HdinsightSparkClusterRolesHeadNode;
  /**
  * worker_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#worker_node HdinsightSparkCluster#worker_node}
  */
  readonly workerNode: HdinsightSparkClusterRolesWorkerNode;
  /**
  * zookeeper_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#zookeeper_node HdinsightSparkCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightSparkClusterRolesZookeeperNode;
}

function hdinsightSparkClusterRolesToTerraform(struct?: HdinsightSparkClusterRolesOutputReference | HdinsightSparkClusterRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    head_node: hdinsightSparkClusterRolesHeadNodeToTerraform(struct!.headNode),
    worker_node: hdinsightSparkClusterRolesWorkerNodeToTerraform(struct!.workerNode),
    zookeeper_node: hdinsightSparkClusterRolesZookeeperNodeToTerraform(struct!.zookeeperNode),
  }
}

export class HdinsightSparkClusterRolesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // head_node - computed: false, optional: false, required: true
  private _headNode?: HdinsightSparkClusterRolesHeadNode; 
  private __headNodeOutput = new HdinsightSparkClusterRolesHeadNodeOutputReference(this as any, "head_node", true);
  public get headNode() {
    return this.__headNodeOutput;
  }
  public putHeadNode(value: HdinsightSparkClusterRolesHeadNode) {
    this._headNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headNodeInput() {
    return this._headNode
  }

  // worker_node - computed: false, optional: false, required: true
  private _workerNode?: HdinsightSparkClusterRolesWorkerNode; 
  private __workerNodeOutput = new HdinsightSparkClusterRolesWorkerNodeOutputReference(this as any, "worker_node", true);
  public get workerNode() {
    return this.__workerNodeOutput;
  }
  public putWorkerNode(value: HdinsightSparkClusterRolesWorkerNode) {
    this._workerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeInput() {
    return this._workerNode
  }

  // zookeeper_node - computed: false, optional: false, required: true
  private _zookeeperNode?: HdinsightSparkClusterRolesZookeeperNode; 
  private __zookeeperNodeOutput = new HdinsightSparkClusterRolesZookeeperNodeOutputReference(this as any, "zookeeper_node", true);
  public get zookeeperNode() {
    return this.__zookeeperNodeOutput;
  }
  public putZookeeperNode(value: HdinsightSparkClusterRolesZookeeperNode) {
    this._zookeeperNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeInput() {
    return this._zookeeperNode
  }
}
export interface HdinsightSparkClusterSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#aadds_resource_id HdinsightSparkCluster#aadds_resource_id}
  */
  readonly aaddsResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#cluster_users_group_dns HdinsightSparkCluster#cluster_users_group_dns}
  */
  readonly clusterUsersGroupDns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#domain_name HdinsightSparkCluster#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#domain_user_password HdinsightSparkCluster#domain_user_password}
  */
  readonly domainUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#domain_username HdinsightSparkCluster#domain_username}
  */
  readonly domainUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#ldaps_urls HdinsightSparkCluster#ldaps_urls}
  */
  readonly ldapsUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#msi_resource_id HdinsightSparkCluster#msi_resource_id}
  */
  readonly msiResourceId: string;
}

function hdinsightSparkClusterSecurityProfileToTerraform(struct?: HdinsightSparkClusterSecurityProfileOutputReference | HdinsightSparkClusterSecurityProfile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aadds_resource_id: cdktf.stringToTerraform(struct!.aaddsResourceId),
    cluster_users_group_dns: cdktf.listMapper(cdktf.stringToTerraform)(struct!.clusterUsersGroupDns),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_user_password: cdktf.stringToTerraform(struct!.domainUserPassword),
    domain_username: cdktf.stringToTerraform(struct!.domainUsername),
    ldaps_urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ldapsUrls),
    msi_resource_id: cdktf.stringToTerraform(struct!.msiResourceId),
  }
}

export class HdinsightSparkClusterSecurityProfileOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aadds_resource_id - computed: false, optional: false, required: true
  private _aaddsResourceId?: string; 
  public get aaddsResourceId() {
    return this.getStringAttribute('aadds_resource_id');
  }
  public set aaddsResourceId(value: string) {
    this._aaddsResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aaddsResourceIdInput() {
    return this._aaddsResourceId
  }

  // cluster_users_group_dns - computed: false, optional: true, required: false
  private _clusterUsersGroupDns?: string[] | undefined; 
  public get clusterUsersGroupDns() {
    return this.getListAttribute('cluster_users_group_dns');
  }
  public set clusterUsersGroupDns(value: string[] | undefined) {
    this._clusterUsersGroupDns = value;
  }
  public resetClusterUsersGroupDns() {
    this._clusterUsersGroupDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUsersGroupDnsInput() {
    return this._clusterUsersGroupDns
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_user_password - computed: false, optional: false, required: true
  private _domainUserPassword?: string; 
  public get domainUserPassword() {
    return this.getStringAttribute('domain_user_password');
  }
  public set domainUserPassword(value: string) {
    this._domainUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUserPasswordInput() {
    return this._domainUserPassword
  }

  // domain_username - computed: false, optional: false, required: true
  private _domainUsername?: string; 
  public get domainUsername() {
    return this.getStringAttribute('domain_username');
  }
  public set domainUsername(value: string) {
    this._domainUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainUsernameInput() {
    return this._domainUsername
  }

  // ldaps_urls - computed: false, optional: false, required: true
  private _ldapsUrls?: string[]; 
  public get ldapsUrls() {
    return this.getListAttribute('ldaps_urls');
  }
  public set ldapsUrls(value: string[]) {
    this._ldapsUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsUrlsInput() {
    return this._ldapsUrls
  }

  // msi_resource_id - computed: false, optional: false, required: true
  private _msiResourceId?: string; 
  public get msiResourceId() {
    return this.getStringAttribute('msi_resource_id');
  }
  public set msiResourceId(value: string) {
    this._msiResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msiResourceIdInput() {
    return this._msiResourceId
  }
}
export interface HdinsightSparkClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#is_default HdinsightSparkCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_account_key HdinsightSparkCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_container_id HdinsightSparkCluster#storage_container_id}
  */
  readonly storageContainerId: string;
}

function hdinsightSparkClusterStorageAccountToTerraform(struct?: HdinsightSparkClusterStorageAccount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
  }
}

export interface HdinsightSparkClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#filesystem_id HdinsightSparkCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#is_default HdinsightSparkCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#managed_identity_resource_id HdinsightSparkCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#storage_resource_id HdinsightSparkCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

function hdinsightSparkClusterStorageAccountGen2ToTerraform(struct?: HdinsightSparkClusterStorageAccountGen2OutputReference | HdinsightSparkClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filesystem_id: cdktf.stringToTerraform(struct!.filesystemId),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    managed_identity_resource_id: cdktf.stringToTerraform(struct!.managedIdentityResourceId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}

export class HdinsightSparkClusterStorageAccountGen2OutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // filesystem_id - computed: false, optional: false, required: true
  private _filesystemId?: string; 
  public get filesystemId() {
    return this.getStringAttribute('filesystem_id');
  }
  public set filesystemId(value: string) {
    this._filesystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemIdInput() {
    return this._filesystemId
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default') as any;
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault
  }

  // managed_identity_resource_id - computed: false, optional: false, required: true
  private _managedIdentityResourceId?: string; 
  public get managedIdentityResourceId() {
    return this.getStringAttribute('managed_identity_resource_id');
  }
  public set managedIdentityResourceId(value: string) {
    this._managedIdentityResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityResourceIdInput() {
    return this._managedIdentityResourceId
  }

  // storage_resource_id - computed: false, optional: false, required: true
  private _storageResourceId?: string; 
  public get storageResourceId() {
    return this.getStringAttribute('storage_resource_id');
  }
  public set storageResourceId(value: string) {
    this._storageResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageResourceIdInput() {
    return this._storageResourceId
  }
}
export interface HdinsightSparkClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#create HdinsightSparkCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#delete HdinsightSparkCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#read HdinsightSparkCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html#update HdinsightSparkCluster#update}
  */
  readonly update?: string;
}

function hdinsightSparkClusterTimeoutsToTerraform(struct?: HdinsightSparkClusterTimeoutsOutputReference | HdinsightSparkClusterTimeouts): any {
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

export class HdinsightSparkClusterTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html azurerm_hdinsight_spark_cluster}
*/
export class HdinsightSparkCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_hdinsight_spark_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_spark_cluster.html azurerm_hdinsight_spark_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightSparkClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HdinsightSparkClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_spark_cluster',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterVersion = config.clusterVersion;
    this._encryptionInTransitEnabled = config.encryptionInTransitEnabled;
    this._location = config.location;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._tier = config.tier;
    this._tlsMinVersion = config.tlsMinVersion;
    this._componentVersion = config.componentVersion;
    this._gateway = config.gateway;
    this._metastores = config.metastores;
    this._monitor = config.monitor;
    this._network = config.network;
    this._roles = config.roles;
    this._securityProfile = config.securityProfile;
    this._storageAccount = config.storageAccount;
    this._storageAccountGen2 = config.storageAccountGen2;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_version - computed: false, optional: false, required: true
  private _clusterVersion?: string; 
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }
  public set clusterVersion(value: string) {
    this._clusterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterVersionInput() {
    return this._clusterVersion
  }

  // encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _encryptionInTransitEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get encryptionInTransitEnabled() {
    return this.getBooleanAttribute('encryption_in_transit_enabled') as any;
  }
  public set encryptionInTransitEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._encryptionInTransitEnabled = value;
  }
  public resetEncryptionInTransitEnabled() {
    this._encryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitEnabledInput() {
    return this._encryptionInTransitEnabled
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // ssh_endpoint - computed: true, optional: false, required: false
  public get sshEndpoint() {
    return this.getStringAttribute('ssh_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // tls_min_version - computed: false, optional: true, required: false
  private _tlsMinVersion?: string | undefined; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string | undefined) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion
  }

  // component_version - computed: false, optional: false, required: true
  private _componentVersion?: HdinsightSparkClusterComponentVersion; 
  private __componentVersionOutput = new HdinsightSparkClusterComponentVersionOutputReference(this as any, "component_version", true);
  public get componentVersion() {
    return this.__componentVersionOutput;
  }
  public putComponentVersion(value: HdinsightSparkClusterComponentVersion) {
    this._componentVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: HdinsightSparkClusterGateway; 
  private __gatewayOutput = new HdinsightSparkClusterGatewayOutputReference(this as any, "gateway", true);
  public get gateway() {
    return this.__gatewayOutput;
  }
  public putGateway(value: HdinsightSparkClusterGateway) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores?: HdinsightSparkClusterMetastores | undefined; 
  private __metastoresOutput = new HdinsightSparkClusterMetastoresOutputReference(this as any, "metastores", true);
  public get metastores() {
    return this.__metastoresOutput;
  }
  public putMetastores(value: HdinsightSparkClusterMetastores | undefined) {
    this._metastores = value;
  }
  public resetMetastores() {
    this._metastores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoresInput() {
    return this._metastores
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: HdinsightSparkClusterMonitor | undefined; 
  private __monitorOutput = new HdinsightSparkClusterMonitorOutputReference(this as any, "monitor", true);
  public get monitor() {
    return this.__monitorOutput;
  }
  public putMonitor(value: HdinsightSparkClusterMonitor | undefined) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor
  }

  // network - computed: false, optional: true, required: false
  private _network?: HdinsightSparkClusterNetwork | undefined; 
  private __networkOutput = new HdinsightSparkClusterNetworkOutputReference(this as any, "network", true);
  public get network() {
    return this.__networkOutput;
  }
  public putNetwork(value: HdinsightSparkClusterNetwork | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: HdinsightSparkClusterRoles; 
  private __rolesOutput = new HdinsightSparkClusterRolesOutputReference(this as any, "roles", true);
  public get roles() {
    return this.__rolesOutput;
  }
  public putRoles(value: HdinsightSparkClusterRoles) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile?: HdinsightSparkClusterSecurityProfile | undefined; 
  private __securityProfileOutput = new HdinsightSparkClusterSecurityProfileOutputReference(this as any, "security_profile", true);
  public get securityProfile() {
    return this.__securityProfileOutput;
  }
  public putSecurityProfile(value: HdinsightSparkClusterSecurityProfile | undefined) {
    this._securityProfile = value;
  }
  public resetSecurityProfile() {
    this._securityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightSparkClusterStorageAccount[] | undefined; 
  public get storageAccount() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage_account') as any;
  }
  public set storageAccount(value: HdinsightSparkClusterStorageAccount[] | undefined) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount
  }

  // storage_account_gen2 - computed: false, optional: true, required: false
  private _storageAccountGen2?: HdinsightSparkClusterStorageAccountGen2 | undefined; 
  private __storageAccountGen2Output = new HdinsightSparkClusterStorageAccountGen2OutputReference(this as any, "storage_account_gen2", true);
  public get storageAccountGen2() {
    return this.__storageAccountGen2Output;
  }
  public putStorageAccountGen2(value: HdinsightSparkClusterStorageAccountGen2 | undefined) {
    this._storageAccountGen2 = value;
  }
  public resetStorageAccountGen2() {
    this._storageAccountGen2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountGen2Input() {
    return this._storageAccountGen2
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: HdinsightSparkClusterTimeouts | undefined; 
  private __timeoutsOutput = new HdinsightSparkClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: HdinsightSparkClusterTimeouts | undefined) {
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
      cluster_version: cdktf.stringToTerraform(this._clusterVersion),
      encryption_in_transit_enabled: cdktf.booleanToTerraform(this._encryptionInTransitEnabled),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      component_version: hdinsightSparkClusterComponentVersionToTerraform(this._componentVersion),
      gateway: hdinsightSparkClusterGatewayToTerraform(this._gateway),
      metastores: hdinsightSparkClusterMetastoresToTerraform(this._metastores),
      monitor: hdinsightSparkClusterMonitorToTerraform(this._monitor),
      network: hdinsightSparkClusterNetworkToTerraform(this._network),
      roles: hdinsightSparkClusterRolesToTerraform(this._roles),
      security_profile: hdinsightSparkClusterSecurityProfileToTerraform(this._securityProfile),
      storage_account: cdktf.listMapper(hdinsightSparkClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: hdinsightSparkClusterStorageAccountGen2ToTerraform(this._storageAccountGen2),
      timeouts: hdinsightSparkClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
