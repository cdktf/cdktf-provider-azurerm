// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightKafkaClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#cluster_version HdinsightKafkaCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#encryption_in_transit_enabled HdinsightKafkaCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#location HdinsightKafkaCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#name HdinsightKafkaCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#resource_group_name HdinsightKafkaCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#tags HdinsightKafkaCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#tier HdinsightKafkaCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#tls_min_version HdinsightKafkaCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#component_version HdinsightKafkaCluster#component_version}
  */
  readonly componentVersion: HdinsightKafkaClusterComponentVersion;
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#gateway HdinsightKafkaCluster#gateway}
  */
  readonly gateway: HdinsightKafkaClusterGateway;
  /**
  * metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#metastores HdinsightKafkaCluster#metastores}
  */
  readonly metastores?: HdinsightKafkaClusterMetastores;
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#monitor HdinsightKafkaCluster#monitor}
  */
  readonly monitor?: HdinsightKafkaClusterMonitor;
  /**
  * rest_proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#rest_proxy HdinsightKafkaCluster#rest_proxy}
  */
  readonly restProxy?: HdinsightKafkaClusterRestProxy;
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#roles HdinsightKafkaCluster#roles}
  */
  readonly roles: HdinsightKafkaClusterRoles;
  /**
  * security_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#security_profile HdinsightKafkaCluster#security_profile}
  */
  readonly securityProfile?: HdinsightKafkaClusterSecurityProfile;
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#storage_account HdinsightKafkaCluster#storage_account}
  */
  readonly storageAccount?: HdinsightKafkaClusterStorageAccount[] | cdktf.IResolvable;
  /**
  * storage_account_gen2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#storage_account_gen2 HdinsightKafkaCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightKafkaClusterStorageAccountGen2;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#timeouts HdinsightKafkaCluster#timeouts}
  */
  readonly timeouts?: HdinsightKafkaClusterTimeouts;
}
export interface HdinsightKafkaClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#kafka HdinsightKafkaCluster#kafka}
  */
  readonly kafka: string;
}

export function hdinsightKafkaClusterComponentVersionToTerraform(struct?: HdinsightKafkaClusterComponentVersionOutputReference | HdinsightKafkaClusterComponentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kafka: cdktf.stringToTerraform(struct!.kafka),
  }
}

export class HdinsightKafkaClusterComponentVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterComponentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kafka !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafka = this._kafka;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterComponentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kafka = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kafka = value.kafka;
    }
  }

  // kafka - computed: false, optional: false, required: true
  private _kafka?: string; 
  public get kafka() {
    return this.getStringAttribute('kafka');
  }
  public set kafka(value: string) {
    this._kafka = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaInput() {
    return this._kafka;
  }
}
export interface HdinsightKafkaClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#enabled HdinsightKafkaCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterGatewayToTerraform(struct?: HdinsightKafkaClusterGatewayOutputReference | HdinsightKafkaClusterGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HdinsightKafkaClusterGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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
    return this._password;
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
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterMetastoresAmbariToTerraform(struct?: HdinsightKafkaClusterMetastoresAmbariOutputReference | HdinsightKafkaClusterMetastoresAmbari): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterMetastoresAmbariOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterMetastoresAmbari | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastoresAmbari | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
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
    return this._databaseName;
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
    return this._password;
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
    return this._server;
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
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterMetastoresHiveToTerraform(struct?: HdinsightKafkaClusterMetastoresHiveOutputReference | HdinsightKafkaClusterMetastoresHive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterMetastoresHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterMetastoresHive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastoresHive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
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
    return this._databaseName;
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
    return this._password;
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
    return this._server;
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
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#database_name HdinsightKafkaCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#server HdinsightKafkaCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
}

export function hdinsightKafkaClusterMetastoresOozieToTerraform(struct?: HdinsightKafkaClusterMetastoresOozieOutputReference | HdinsightKafkaClusterMetastoresOozie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterMetastoresOozieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterMetastoresOozie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastoresOozie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._password = undefined;
      this._server = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._password = value.password;
      this._server = value.server;
      this._username = value.username;
    }
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
    return this._databaseName;
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
    return this._password;
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
    return this._server;
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
    return this._username;
  }
}
export interface HdinsightKafkaClusterMetastores {
  /**
  * ambari block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#ambari HdinsightKafkaCluster#ambari}
  */
  readonly ambari?: HdinsightKafkaClusterMetastoresAmbari;
  /**
  * hive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#hive HdinsightKafkaCluster#hive}
  */
  readonly hive?: HdinsightKafkaClusterMetastoresHive;
  /**
  * oozie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#oozie HdinsightKafkaCluster#oozie}
  */
  readonly oozie?: HdinsightKafkaClusterMetastoresOozie;
}

export function hdinsightKafkaClusterMetastoresToTerraform(struct?: HdinsightKafkaClusterMetastoresOutputReference | HdinsightKafkaClusterMetastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambari: hdinsightKafkaClusterMetastoresAmbariToTerraform(struct!.ambari),
    hive: hdinsightKafkaClusterMetastoresHiveToTerraform(struct!.hive),
    oozie: hdinsightKafkaClusterMetastoresOozieToTerraform(struct!.oozie),
  }
}

export class HdinsightKafkaClusterMetastoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterMetastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ambari?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambari = this._ambari?.internalValue;
    }
    if (this._hive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hive = this._hive?.internalValue;
    }
    if (this._oozie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oozie = this._oozie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMetastores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ambari.internalValue = undefined;
      this._hive.internalValue = undefined;
      this._oozie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ambari.internalValue = value.ambari;
      this._hive.internalValue = value.hive;
      this._oozie.internalValue = value.oozie;
    }
  }

  // ambari - computed: false, optional: true, required: false
  private _ambari = new HdinsightKafkaClusterMetastoresAmbariOutputReference(this, "ambari", true);
  public get ambari() {
    return this._ambari;
  }
  public putAmbari(value: HdinsightKafkaClusterMetastoresAmbari) {
    this._ambari.internalValue = value;
  }
  public resetAmbari() {
    this._ambari.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambariInput() {
    return this._ambari.internalValue;
  }

  // hive - computed: false, optional: true, required: false
  private _hive = new HdinsightKafkaClusterMetastoresHiveOutputReference(this, "hive", true);
  public get hive() {
    return this._hive;
  }
  public putHive(value: HdinsightKafkaClusterMetastoresHive) {
    this._hive.internalValue = value;
  }
  public resetHive() {
    this._hive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveInput() {
    return this._hive.internalValue;
  }

  // oozie - computed: false, optional: true, required: false
  private _oozie = new HdinsightKafkaClusterMetastoresOozieOutputReference(this, "oozie", true);
  public get oozie() {
    return this._oozie;
  }
  public putOozie(value: HdinsightKafkaClusterMetastoresOozie) {
    this._oozie.internalValue = value;
  }
  public resetOozie() {
    this._oozie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oozieInput() {
    return this._oozie.internalValue;
  }
}
export interface HdinsightKafkaClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#log_analytics_workspace_id HdinsightKafkaCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#primary_key HdinsightKafkaCluster#primary_key}
  */
  readonly primaryKey: string;
}

export function hdinsightKafkaClusterMonitorToTerraform(struct?: HdinsightKafkaClusterMonitorOutputReference | HdinsightKafkaClusterMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export class HdinsightKafkaClusterMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAnalyticsWorkspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAnalyticsWorkspaceId = this._logAnalyticsWorkspaceId;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logAnalyticsWorkspaceId = undefined;
      this._primaryKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logAnalyticsWorkspaceId = value.logAnalyticsWorkspaceId;
      this._primaryKey = value.primaryKey;
    }
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
    return this._logAnalyticsWorkspaceId;
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
    return this._primaryKey;
  }
}
export interface HdinsightKafkaClusterRestProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#security_group_id HdinsightKafkaCluster#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#security_group_name HdinsightKafkaCluster#security_group_name}
  */
  readonly securityGroupName?: string;
}

export function hdinsightKafkaClusterRestProxyToTerraform(struct?: HdinsightKafkaClusterRestProxyOutputReference | HdinsightKafkaClusterRestProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    security_group_name: cdktf.stringToTerraform(struct!.securityGroupName),
  }
}

export class HdinsightKafkaClusterRestProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterRestProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._securityGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupName = this._securityGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRestProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupId = undefined;
      this._securityGroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupId = value.securityGroupId;
      this._securityGroupName = value.securityGroupName;
    }
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // security_group_name - computed: true, optional: true, required: false
  private _securityGroupName?: string; 
  public get securityGroupName() {
    return this.getStringAttribute('security_group_name');
  }
  public set securityGroupName(value: string) {
    this._securityGroupName = value;
  }
  public resetSecurityGroupName() {
    this._securityGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupNameInput() {
    return this._securityGroupName;
  }
}
export interface HdinsightKafkaClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

export function hdinsightKafkaClusterRolesHeadNodeToTerraform(struct?: HdinsightKafkaClusterRolesHeadNodeOutputReference | HdinsightKafkaClusterRolesHeadNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterRolesHeadNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterRolesHeadNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesHeadNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
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
    return this._vmSize;
  }
}
export interface HdinsightKafkaClusterRolesKafkaManagementNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

export function hdinsightKafkaClusterRolesKafkaManagementNodeToTerraform(struct?: HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference | HdinsightKafkaClusterRolesKafkaManagementNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterRolesKafkaManagementNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesKafkaManagementNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
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
    return this._vmSize;
  }
}
export interface HdinsightKafkaClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#min_instance_count HdinsightKafkaCluster#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#number_of_disks_per_node HdinsightKafkaCluster#number_of_disks_per_node}
  */
  readonly numberOfDisksPerNode: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#target_instance_count HdinsightKafkaCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

export function hdinsightKafkaClusterRolesWorkerNodeToTerraform(struct?: HdinsightKafkaClusterRolesWorkerNodeOutputReference | HdinsightKafkaClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    number_of_disks_per_node: cdktf.numberToTerraform(struct!.numberOfDisksPerNode),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sshKeys),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    username: cdktf.stringToTerraform(struct!.username),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}

export class HdinsightKafkaClusterRolesWorkerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterRolesWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._numberOfDisksPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDisksPerNode = this._numberOfDisksPerNode;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._targetInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInstanceCount = this._targetInstanceCount;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minInstanceCount = undefined;
      this._numberOfDisksPerNode = undefined;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._targetInstanceCount = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minInstanceCount = value.minInstanceCount;
      this._numberOfDisksPerNode = value.numberOfDisksPerNode;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._targetInstanceCount = value.targetInstanceCount;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
    }
  }

  // min_instance_count - computed: true, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // number_of_disks_per_node - computed: false, optional: false, required: true
  private _numberOfDisksPerNode?: number; 
  public get numberOfDisksPerNode() {
    return this.getNumberAttribute('number_of_disks_per_node');
  }
  public set numberOfDisksPerNode(value: number) {
    this._numberOfDisksPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDisksPerNodeInput() {
    return this._numberOfDisksPerNode;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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
    return this._targetInstanceCount;
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
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
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
    return this._vmSize;
  }
}
export interface HdinsightKafkaClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#password HdinsightKafkaCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#ssh_keys HdinsightKafkaCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#subnet_id HdinsightKafkaCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#username HdinsightKafkaCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#virtual_network_id HdinsightKafkaCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#vm_size HdinsightKafkaCluster#vm_size}
  */
  readonly vmSize: string;
}

export function hdinsightKafkaClusterRolesZookeeperNodeToTerraform(struct?: HdinsightKafkaClusterRolesZookeeperNodeOutputReference | HdinsightKafkaClusterRolesZookeeperNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterRolesZookeeperNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterRolesZookeeperNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRolesZookeeperNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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
    return this._username;
  }

  // virtual_network_id - computed: false, optional: true, required: false
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  public resetVirtualNetworkId() {
    this._virtualNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
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
    return this._vmSize;
  }
}
export interface HdinsightKafkaClusterRoles {
  /**
  * head_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#head_node HdinsightKafkaCluster#head_node}
  */
  readonly headNode: HdinsightKafkaClusterRolesHeadNode;
  /**
  * kafka_management_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#kafka_management_node HdinsightKafkaCluster#kafka_management_node}
  */
  readonly kafkaManagementNode?: HdinsightKafkaClusterRolesKafkaManagementNode;
  /**
  * worker_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#worker_node HdinsightKafkaCluster#worker_node}
  */
  readonly workerNode: HdinsightKafkaClusterRolesWorkerNode;
  /**
  * zookeeper_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#zookeeper_node HdinsightKafkaCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightKafkaClusterRolesZookeeperNode;
}

export function hdinsightKafkaClusterRolesToTerraform(struct?: HdinsightKafkaClusterRolesOutputReference | HdinsightKafkaClusterRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    head_node: hdinsightKafkaClusterRolesHeadNodeToTerraform(struct!.headNode),
    kafka_management_node: hdinsightKafkaClusterRolesKafkaManagementNodeToTerraform(struct!.kafkaManagementNode),
    worker_node: hdinsightKafkaClusterRolesWorkerNodeToTerraform(struct!.workerNode),
    zookeeper_node: hdinsightKafkaClusterRolesZookeeperNodeToTerraform(struct!.zookeeperNode),
  }
}

export class HdinsightKafkaClusterRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headNode = this._headNode?.internalValue;
    }
    if (this._kafkaManagementNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaManagementNode = this._kafkaManagementNode?.internalValue;
    }
    if (this._workerNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerNode = this._workerNode?.internalValue;
    }
    if (this._zookeeperNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zookeeperNode = this._zookeeperNode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headNode.internalValue = undefined;
      this._kafkaManagementNode.internalValue = undefined;
      this._workerNode.internalValue = undefined;
      this._zookeeperNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headNode.internalValue = value.headNode;
      this._kafkaManagementNode.internalValue = value.kafkaManagementNode;
      this._workerNode.internalValue = value.workerNode;
      this._zookeeperNode.internalValue = value.zookeeperNode;
    }
  }

  // head_node - computed: false, optional: false, required: true
  private _headNode = new HdinsightKafkaClusterRolesHeadNodeOutputReference(this, "head_node", true);
  public get headNode() {
    return this._headNode;
  }
  public putHeadNode(value: HdinsightKafkaClusterRolesHeadNode) {
    this._headNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headNodeInput() {
    return this._headNode.internalValue;
  }

  // kafka_management_node - computed: false, optional: true, required: false
  private _kafkaManagementNode = new HdinsightKafkaClusterRolesKafkaManagementNodeOutputReference(this, "kafka_management_node", true);
  public get kafkaManagementNode() {
    return this._kafkaManagementNode;
  }
  public putKafkaManagementNode(value: HdinsightKafkaClusterRolesKafkaManagementNode) {
    this._kafkaManagementNode.internalValue = value;
  }
  public resetKafkaManagementNode() {
    this._kafkaManagementNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaManagementNodeInput() {
    return this._kafkaManagementNode.internalValue;
  }

  // worker_node - computed: false, optional: false, required: true
  private _workerNode = new HdinsightKafkaClusterRolesWorkerNodeOutputReference(this, "worker_node", true);
  public get workerNode() {
    return this._workerNode;
  }
  public putWorkerNode(value: HdinsightKafkaClusterRolesWorkerNode) {
    this._workerNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeInput() {
    return this._workerNode.internalValue;
  }

  // zookeeper_node - computed: false, optional: false, required: true
  private _zookeeperNode = new HdinsightKafkaClusterRolesZookeeperNodeOutputReference(this, "zookeeper_node", true);
  public get zookeeperNode() {
    return this._zookeeperNode;
  }
  public putZookeeperNode(value: HdinsightKafkaClusterRolesZookeeperNode) {
    this._zookeeperNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeInput() {
    return this._zookeeperNode.internalValue;
  }
}
export interface HdinsightKafkaClusterSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#aadds_resource_id HdinsightKafkaCluster#aadds_resource_id}
  */
  readonly aaddsResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#cluster_users_group_dns HdinsightKafkaCluster#cluster_users_group_dns}
  */
  readonly clusterUsersGroupDns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#domain_name HdinsightKafkaCluster#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#domain_user_password HdinsightKafkaCluster#domain_user_password}
  */
  readonly domainUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#domain_username HdinsightKafkaCluster#domain_username}
  */
  readonly domainUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#ldaps_urls HdinsightKafkaCluster#ldaps_urls}
  */
  readonly ldapsUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#msi_resource_id HdinsightKafkaCluster#msi_resource_id}
  */
  readonly msiResourceId: string;
}

export function hdinsightKafkaClusterSecurityProfileToTerraform(struct?: HdinsightKafkaClusterSecurityProfileOutputReference | HdinsightKafkaClusterSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterSecurityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aaddsResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaddsResourceId = this._aaddsResourceId;
    }
    if (this._clusterUsersGroupDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUsersGroupDns = this._clusterUsersGroupDns;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUserPassword = this._domainUserPassword;
    }
    if (this._domainUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainUsername = this._domainUsername;
    }
    if (this._ldapsUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsUrls = this._ldapsUrls;
    }
    if (this._msiResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.msiResourceId = this._msiResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterSecurityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aaddsResourceId = undefined;
      this._clusterUsersGroupDns = undefined;
      this._domainName = undefined;
      this._domainUserPassword = undefined;
      this._domainUsername = undefined;
      this._ldapsUrls = undefined;
      this._msiResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aaddsResourceId = value.aaddsResourceId;
      this._clusterUsersGroupDns = value.clusterUsersGroupDns;
      this._domainName = value.domainName;
      this._domainUserPassword = value.domainUserPassword;
      this._domainUsername = value.domainUsername;
      this._ldapsUrls = value.ldapsUrls;
      this._msiResourceId = value.msiResourceId;
    }
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
    return this._aaddsResourceId;
  }

  // cluster_users_group_dns - computed: false, optional: true, required: false
  private _clusterUsersGroupDns?: string[]; 
  public get clusterUsersGroupDns() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_users_group_dns'));
  }
  public set clusterUsersGroupDns(value: string[]) {
    this._clusterUsersGroupDns = value;
  }
  public resetClusterUsersGroupDns() {
    this._clusterUsersGroupDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUsersGroupDnsInput() {
    return this._clusterUsersGroupDns;
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
    return this._domainName;
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
    return this._domainUserPassword;
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
    return this._domainUsername;
  }

  // ldaps_urls - computed: false, optional: false, required: true
  private _ldapsUrls?: string[]; 
  public get ldapsUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('ldaps_urls'));
  }
  public set ldapsUrls(value: string[]) {
    this._ldapsUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsUrlsInput() {
    return this._ldapsUrls;
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
    return this._msiResourceId;
  }
}
export interface HdinsightKafkaClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#storage_account_key HdinsightKafkaCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#storage_container_id HdinsightKafkaCluster#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}
  */
  readonly storageResourceId?: string;
}

export function hdinsightKafkaClusterStorageAccountToTerraform(struct?: HdinsightKafkaClusterStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    storage_account_key: cdktf.stringToTerraform(struct!.storageAccountKey),
    storage_container_id: cdktf.stringToTerraform(struct!.storageContainerId),
    storage_resource_id: cdktf.stringToTerraform(struct!.storageResourceId),
  }
}

export interface HdinsightKafkaClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#filesystem_id HdinsightKafkaCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#is_default HdinsightKafkaCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#managed_identity_resource_id HdinsightKafkaCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#storage_resource_id HdinsightKafkaCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

export function hdinsightKafkaClusterStorageAccountGen2ToTerraform(struct?: HdinsightKafkaClusterStorageAccountGen2OutputReference | HdinsightKafkaClusterStorageAccountGen2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterStorageAccountGen2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterStorageAccountGen2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filesystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemId = this._filesystemId;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._managedIdentityResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedIdentityResourceId = this._managedIdentityResourceId;
    }
    if (this._storageResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageResourceId = this._storageResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterStorageAccountGen2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filesystemId = undefined;
      this._isDefault = undefined;
      this._managedIdentityResourceId = undefined;
      this._storageResourceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filesystemId = value.filesystemId;
      this._isDefault = value.isDefault;
      this._managedIdentityResourceId = value.managedIdentityResourceId;
      this._storageResourceId = value.storageResourceId;
    }
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
    return this._filesystemId;
  }

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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
    return this._managedIdentityResourceId;
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
    return this._storageResourceId;
  }
}
export interface HdinsightKafkaClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#create HdinsightKafkaCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#delete HdinsightKafkaCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#read HdinsightKafkaCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster#update HdinsightKafkaCluster#update}
  */
  readonly update?: string;
}

export function hdinsightKafkaClusterTimeoutsToTerraform(struct?: HdinsightKafkaClusterTimeoutsOutputReference | HdinsightKafkaClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class HdinsightKafkaClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightKafkaClusterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightKafkaClusterTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster}
*/
export class HdinsightKafkaCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_hdinsight_kafka_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_kafka_cluster azurerm_hdinsight_kafka_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightKafkaClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HdinsightKafkaClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_kafka_cluster',
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
    this._componentVersion.internalValue = config.componentVersion;
    this._gateway.internalValue = config.gateway;
    this._metastores.internalValue = config.metastores;
    this._monitor.internalValue = config.monitor;
    this._restProxy.internalValue = config.restProxy;
    this._roles.internalValue = config.roles;
    this._securityProfile.internalValue = config.securityProfile;
    this._storageAccount = config.storageAccount;
    this._storageAccountGen2.internalValue = config.storageAccountGen2;
    this._timeouts.internalValue = config.timeouts;
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
    return this._clusterVersion;
  }

  // encryption_in_transit_enabled - computed: false, optional: true, required: false
  private _encryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get encryptionInTransitEnabled() {
    return this.getBooleanAttribute('encryption_in_transit_enabled');
  }
  public set encryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._encryptionInTransitEnabled = value;
  }
  public resetEncryptionInTransitEnabled() {
    this._encryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInTransitEnabledInput() {
    return this._encryptionInTransitEnabled;
  }

  // https_endpoint - computed: true, optional: false, required: false
  public get httpsEndpoint() {
    return this.getStringAttribute('https_endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_rest_proxy_endpoint - computed: true, optional: false, required: false
  public get kafkaRestProxyEndpoint() {
    return this.getStringAttribute('kafka_rest_proxy_endpoint');
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
    return this._location;
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
    return this._name;
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
    return this._resourceGroupName;
  }

  // ssh_endpoint - computed: true, optional: false, required: false
  public get sshEndpoint() {
    return this.getStringAttribute('ssh_endpoint');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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
    return this._tier;
  }

  // tls_min_version - computed: false, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // component_version - computed: false, optional: false, required: true
  private _componentVersion = new HdinsightKafkaClusterComponentVersionOutputReference(this, "component_version", true);
  public get componentVersion() {
    return this._componentVersion;
  }
  public putComponentVersion(value: HdinsightKafkaClusterComponentVersion) {
    this._componentVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion.internalValue;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new HdinsightKafkaClusterGatewayOutputReference(this, "gateway", true);
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: HdinsightKafkaClusterGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores = new HdinsightKafkaClusterMetastoresOutputReference(this, "metastores", true);
  public get metastores() {
    return this._metastores;
  }
  public putMetastores(value: HdinsightKafkaClusterMetastores) {
    this._metastores.internalValue = value;
  }
  public resetMetastores() {
    this._metastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoresInput() {
    return this._metastores.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new HdinsightKafkaClusterMonitorOutputReference(this, "monitor", true);
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: HdinsightKafkaClusterMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // rest_proxy - computed: false, optional: true, required: false
  private _restProxy = new HdinsightKafkaClusterRestProxyOutputReference(this, "rest_proxy", true);
  public get restProxy() {
    return this._restProxy;
  }
  public putRestProxy(value: HdinsightKafkaClusterRestProxy) {
    this._restProxy.internalValue = value;
  }
  public resetRestProxy() {
    this._restProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restProxyInput() {
    return this._restProxy.internalValue;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new HdinsightKafkaClusterRolesOutputReference(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: HdinsightKafkaClusterRoles) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile = new HdinsightKafkaClusterSecurityProfileOutputReference(this, "security_profile", true);
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: HdinsightKafkaClusterSecurityProfile) {
    this._securityProfile.internalValue = value;
  }
  public resetSecurityProfile() {
    this._securityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile.internalValue;
  }

  // storage_account - computed: false, optional: true, required: false
  private _storageAccount?: HdinsightKafkaClusterStorageAccount[] | cdktf.IResolvable; 
  public get storageAccount() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage_account');
  }
  public set storageAccount(value: HdinsightKafkaClusterStorageAccount[] | cdktf.IResolvable) {
    this._storageAccount = value;
  }
  public resetStorageAccount() {
    this._storageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // storage_account_gen2 - computed: false, optional: true, required: false
  private _storageAccountGen2 = new HdinsightKafkaClusterStorageAccountGen2OutputReference(this, "storage_account_gen2", true);
  public get storageAccountGen2() {
    return this._storageAccountGen2;
  }
  public putStorageAccountGen2(value: HdinsightKafkaClusterStorageAccountGen2) {
    this._storageAccountGen2.internalValue = value;
  }
  public resetStorageAccountGen2() {
    this._storageAccountGen2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountGen2Input() {
    return this._storageAccountGen2.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HdinsightKafkaClusterTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HdinsightKafkaClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      component_version: hdinsightKafkaClusterComponentVersionToTerraform(this._componentVersion.internalValue),
      gateway: hdinsightKafkaClusterGatewayToTerraform(this._gateway.internalValue),
      metastores: hdinsightKafkaClusterMetastoresToTerraform(this._metastores.internalValue),
      monitor: hdinsightKafkaClusterMonitorToTerraform(this._monitor.internalValue),
      rest_proxy: hdinsightKafkaClusterRestProxyToTerraform(this._restProxy.internalValue),
      roles: hdinsightKafkaClusterRolesToTerraform(this._roles.internalValue),
      security_profile: hdinsightKafkaClusterSecurityProfileToTerraform(this._securityProfile.internalValue),
      storage_account: cdktf.listMapper(hdinsightKafkaClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: hdinsightKafkaClusterStorageAccountGen2ToTerraform(this._storageAccountGen2.internalValue),
      timeouts: hdinsightKafkaClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
