// https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HdinsightInteractiveQueryClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#cluster_version HdinsightInteractiveQueryCluster#cluster_version}
  */
  readonly clusterVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#encryption_in_transit_enabled HdinsightInteractiveQueryCluster#encryption_in_transit_enabled}
  */
  readonly encryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#location HdinsightInteractiveQueryCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#name HdinsightInteractiveQueryCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#resource_group_name HdinsightInteractiveQueryCluster#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#tags HdinsightInteractiveQueryCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#tier HdinsightInteractiveQueryCluster#tier}
  */
  readonly tier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#tls_min_version HdinsightInteractiveQueryCluster#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * component_version block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#component_version HdinsightInteractiveQueryCluster#component_version}
  */
  readonly componentVersion: HdinsightInteractiveQueryClusterComponentVersion;
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#gateway HdinsightInteractiveQueryCluster#gateway}
  */
  readonly gateway: HdinsightInteractiveQueryClusterGateway;
  /**
  * metastores block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#metastores HdinsightInteractiveQueryCluster#metastores}
  */
  readonly metastores?: HdinsightInteractiveQueryClusterMetastores;
  /**
  * monitor block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#monitor HdinsightInteractiveQueryCluster#monitor}
  */
  readonly monitor?: HdinsightInteractiveQueryClusterMonitor;
  /**
  * network block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#network HdinsightInteractiveQueryCluster#network}
  */
  readonly network?: HdinsightInteractiveQueryClusterNetwork;
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#roles HdinsightInteractiveQueryCluster#roles}
  */
  readonly roles: HdinsightInteractiveQueryClusterRoles;
  /**
  * security_profile block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#security_profile HdinsightInteractiveQueryCluster#security_profile}
  */
  readonly securityProfile?: HdinsightInteractiveQueryClusterSecurityProfile;
  /**
  * storage_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#storage_account HdinsightInteractiveQueryCluster#storage_account}
  */
  readonly storageAccount?: HdinsightInteractiveQueryClusterStorageAccount[] | cdktf.IResolvable;
  /**
  * storage_account_gen2 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#storage_account_gen2 HdinsightInteractiveQueryCluster#storage_account_gen2}
  */
  readonly storageAccountGen2?: HdinsightInteractiveQueryClusterStorageAccountGen2;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#timeouts HdinsightInteractiveQueryCluster#timeouts}
  */
  readonly timeouts?: HdinsightInteractiveQueryClusterTimeouts;
}
export interface HdinsightInteractiveQueryClusterComponentVersion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#interactive_hive HdinsightInteractiveQueryCluster#interactive_hive}
  */
  readonly interactiveHive: string;
}

export function hdinsightInteractiveQueryClusterComponentVersionToTerraform(struct?: HdinsightInteractiveQueryClusterComponentVersionOutputReference | HdinsightInteractiveQueryClusterComponentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interactive_hive: cdktf.stringToTerraform(struct!.interactiveHive),
  }
}

export class HdinsightInteractiveQueryClusterComponentVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterComponentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interactiveHive !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactiveHive = this._interactiveHive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightInteractiveQueryClusterComponentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interactiveHive = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interactiveHive = value.interactiveHive;
    }
  }

  // interactive_hive - computed: false, optional: false, required: true
  private _interactiveHive?: string; 
  public get interactiveHive() {
    return this.getStringAttribute('interactive_hive');
  }
  public set interactiveHive(value: string) {
    this._interactiveHive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveHiveInput() {
    return this._interactiveHive;
  }
}
export interface HdinsightInteractiveQueryClusterGateway {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#enabled HdinsightInteractiveQueryCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

export function hdinsightInteractiveQueryClusterGatewayToTerraform(struct?: HdinsightInteractiveQueryClusterGatewayOutputReference | HdinsightInteractiveQueryClusterGateway): any {
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

export class HdinsightInteractiveQueryClusterGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterGateway | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterGateway | undefined) {
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
export interface HdinsightInteractiveQueryClusterMetastoresAmbari {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

export function hdinsightInteractiveQueryClusterMetastoresAmbariToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference | HdinsightInteractiveQueryClusterMetastoresAmbari): any {
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

export class HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterMetastoresAmbari | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterMetastoresAmbari | undefined) {
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
export interface HdinsightInteractiveQueryClusterMetastoresHive {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

export function hdinsightInteractiveQueryClusterMetastoresHiveToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresHiveOutputReference | HdinsightInteractiveQueryClusterMetastoresHive): any {
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

export class HdinsightInteractiveQueryClusterMetastoresHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterMetastoresHive | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterMetastoresHive | undefined) {
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
export interface HdinsightInteractiveQueryClusterMetastoresOozie {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#database_name HdinsightInteractiveQueryCluster#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#server HdinsightInteractiveQueryCluster#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
}

export function hdinsightInteractiveQueryClusterMetastoresOozieToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresOozieOutputReference | HdinsightInteractiveQueryClusterMetastoresOozie): any {
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

export class HdinsightInteractiveQueryClusterMetastoresOozieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterMetastoresOozie | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterMetastoresOozie | undefined) {
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
export interface HdinsightInteractiveQueryClusterMetastores {
  /**
  * ambari block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#ambari HdinsightInteractiveQueryCluster#ambari}
  */
  readonly ambari?: HdinsightInteractiveQueryClusterMetastoresAmbari;
  /**
  * hive block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#hive HdinsightInteractiveQueryCluster#hive}
  */
  readonly hive?: HdinsightInteractiveQueryClusterMetastoresHive;
  /**
  * oozie block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#oozie HdinsightInteractiveQueryCluster#oozie}
  */
  readonly oozie?: HdinsightInteractiveQueryClusterMetastoresOozie;
}

export function hdinsightInteractiveQueryClusterMetastoresToTerraform(struct?: HdinsightInteractiveQueryClusterMetastoresOutputReference | HdinsightInteractiveQueryClusterMetastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ambari: hdinsightInteractiveQueryClusterMetastoresAmbariToTerraform(struct!.ambari),
    hive: hdinsightInteractiveQueryClusterMetastoresHiveToTerraform(struct!.hive),
    oozie: hdinsightInteractiveQueryClusterMetastoresOozieToTerraform(struct!.oozie),
  }
}

export class HdinsightInteractiveQueryClusterMetastoresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterMetastores | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterMetastores | undefined) {
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
  private _ambari = new HdinsightInteractiveQueryClusterMetastoresAmbariOutputReference(this, "ambari", true);
  public get ambari() {
    return this._ambari;
  }
  public putAmbari(value: HdinsightInteractiveQueryClusterMetastoresAmbari) {
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
  private _hive = new HdinsightInteractiveQueryClusterMetastoresHiveOutputReference(this, "hive", true);
  public get hive() {
    return this._hive;
  }
  public putHive(value: HdinsightInteractiveQueryClusterMetastoresHive) {
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
  private _oozie = new HdinsightInteractiveQueryClusterMetastoresOozieOutputReference(this, "oozie", true);
  public get oozie() {
    return this._oozie;
  }
  public putOozie(value: HdinsightInteractiveQueryClusterMetastoresOozie) {
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
export interface HdinsightInteractiveQueryClusterMonitor {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#log_analytics_workspace_id HdinsightInteractiveQueryCluster#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#primary_key HdinsightInteractiveQueryCluster#primary_key}
  */
  readonly primaryKey: string;
}

export function hdinsightInteractiveQueryClusterMonitorToTerraform(struct?: HdinsightInteractiveQueryClusterMonitorOutputReference | HdinsightInteractiveQueryClusterMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_analytics_workspace_id: cdktf.stringToTerraform(struct!.logAnalyticsWorkspaceId),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}

export class HdinsightInteractiveQueryClusterMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterMonitor | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterMonitor | undefined) {
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
export interface HdinsightInteractiveQueryClusterNetwork {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#connection_direction HdinsightInteractiveQueryCluster#connection_direction}
  */
  readonly connectionDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#private_link_enabled HdinsightInteractiveQueryCluster#private_link_enabled}
  */
  readonly privateLinkEnabled?: boolean | cdktf.IResolvable;
}

export function hdinsightInteractiveQueryClusterNetworkToTerraform(struct?: HdinsightInteractiveQueryClusterNetworkOutputReference | HdinsightInteractiveQueryClusterNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_direction: cdktf.stringToTerraform(struct!.connectionDirection),
    private_link_enabled: cdktf.booleanToTerraform(struct!.privateLinkEnabled),
  }
}

export class HdinsightInteractiveQueryClusterNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionDirection = this._connectionDirection;
    }
    if (this._privateLinkEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateLinkEnabled = this._privateLinkEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightInteractiveQueryClusterNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionDirection = undefined;
      this._privateLinkEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionDirection = value.connectionDirection;
      this._privateLinkEnabled = value.privateLinkEnabled;
    }
  }

  // connection_direction - computed: false, optional: true, required: false
  private _connectionDirection?: string; 
  public get connectionDirection() {
    return this.getStringAttribute('connection_direction');
  }
  public set connectionDirection(value: string) {
    this._connectionDirection = value;
  }
  public resetConnectionDirection() {
    this._connectionDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDirectionInput() {
    return this._connectionDirection;
  }

  // private_link_enabled - computed: false, optional: true, required: false
  private _privateLinkEnabled?: boolean | cdktf.IResolvable; 
  public get privateLinkEnabled() {
    return this.getBooleanAttribute('private_link_enabled');
  }
  public set privateLinkEnabled(value: boolean | cdktf.IResolvable) {
    this._privateLinkEnabled = value;
  }
  public resetPrivateLinkEnabled() {
    this._privateLinkEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateLinkEnabledInput() {
    return this._privateLinkEnabled;
  }
}
export interface HdinsightInteractiveQueryClusterRolesHeadNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}
  */
  readonly vmSize: string;
}

export function hdinsightInteractiveQueryClusterRolesHeadNodeToTerraform(struct?: HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference | HdinsightInteractiveQueryClusterRolesHeadNode): any {
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

export class HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRolesHeadNode | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterRolesHeadNode | undefined) {
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
export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#max_instance_count HdinsightInteractiveQueryCluster#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#min_instance_count HdinsightInteractiveQueryCluster#min_instance_count}
  */
  readonly minInstanceCount: number;
}

export function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}

export class HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
    }
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
    return this._maxInstanceCount;
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
    return this._minInstanceCount;
  }
}
export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#days HdinsightInteractiveQueryCluster#days}
  */
  readonly days: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#time HdinsightInteractiveQueryCluster#time}
  */
  readonly time: string;
}

export function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.listMapper(cdktf.stringToTerraform)(struct!.days),
    target_instance_count: cdktf.numberToTerraform(struct!.targetInstanceCount),
    time: cdktf.stringToTerraform(struct!.time),
  }
}

export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#timezone HdinsightInteractiveQueryCluster#timezone}
  */
  readonly timezone: string;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#schedule HdinsightInteractiveQueryCluster#schedule}
  */
  readonly schedule: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[] | cdktf.IResolvable;
}

export function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timezone: cdktf.stringToTerraform(struct!.timezone),
    schedule: cdktf.listMapper(hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceScheduleToTerraform)(struct!.schedule),
  }
}

export class HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timezone = undefined;
      this._schedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timezone = value.timezone;
      this._schedule = value.schedule;
    }
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
    return this._timezone;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[] | cdktf.IResolvable; 
  public get schedule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('schedule');
  }
  public set schedule(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceSchedule[] | cdktf.IResolvable) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }
}
export interface HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale {
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#capacity HdinsightInteractiveQueryCluster#capacity}
  */
  readonly capacity?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity;
  /**
  * recurrence block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#recurrence HdinsightInteractiveQueryCluster#recurrence}
  */
  readonly recurrence?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence;
}

export function hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference | HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity: hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityToTerraform(struct!.capacity),
    recurrence: hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceToTerraform(struct!.recurrence),
  }
}

export class HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacity = this._capacity?.internalValue;
    }
    if (this._recurrence?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacity.internalValue = undefined;
      this._recurrence.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacity.internalValue = value.capacity;
      this._recurrence.internalValue = value.recurrence;
    }
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacityOutputReference(this, "capacity", true);
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence = new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrenceOutputReference(this, "recurrence", true);
  public get recurrence() {
    return this._recurrence;
  }
  public putRecurrence(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleRecurrence) {
    this._recurrence.internalValue = value;
  }
  public resetRecurrence() {
    this._recurrence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence.internalValue;
  }
}
export interface HdinsightInteractiveQueryClusterRolesWorkerNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#min_instance_count HdinsightInteractiveQueryCluster#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#target_instance_count HdinsightInteractiveQueryCluster#target_instance_count}
  */
  readonly targetInstanceCount: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}
  */
  readonly vmSize: string;
  /**
  * autoscale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#autoscale HdinsightInteractiveQueryCluster#autoscale}
  */
  readonly autoscale?: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale;
}

export function hdinsightInteractiveQueryClusterRolesWorkerNodeToTerraform(struct?: HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference | HdinsightInteractiveQueryClusterRolesWorkerNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
    autoscale: hdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleToTerraform(struct!.autoscale),
  }
}

export class HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRolesWorkerNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
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
    if (this._autoscale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscale = this._autoscale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HdinsightInteractiveQueryClusterRolesWorkerNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minInstanceCount = undefined;
      this._password = undefined;
      this._sshKeys = undefined;
      this._subnetId = undefined;
      this._targetInstanceCount = undefined;
      this._username = undefined;
      this._virtualNetworkId = undefined;
      this._vmSize = undefined;
      this._autoscale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minInstanceCount = value.minInstanceCount;
      this._password = value.password;
      this._sshKeys = value.sshKeys;
      this._subnetId = value.subnetId;
      this._targetInstanceCount = value.targetInstanceCount;
      this._username = value.username;
      this._virtualNetworkId = value.virtualNetworkId;
      this._vmSize = value.vmSize;
      this._autoscale.internalValue = value.autoscale;
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

  // autoscale - computed: false, optional: true, required: false
  private _autoscale = new HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscaleOutputReference(this, "autoscale", true);
  public get autoscale() {
    return this._autoscale;
  }
  public putAutoscale(value: HdinsightInteractiveQueryClusterRolesWorkerNodeAutoscale) {
    this._autoscale.internalValue = value;
  }
  public resetAutoscale() {
    this._autoscale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale.internalValue;
  }
}
export interface HdinsightInteractiveQueryClusterRolesZookeeperNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#password HdinsightInteractiveQueryCluster#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#ssh_keys HdinsightInteractiveQueryCluster#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#subnet_id HdinsightInteractiveQueryCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#username HdinsightInteractiveQueryCluster#username}
  */
  readonly username: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#virtual_network_id HdinsightInteractiveQueryCluster#virtual_network_id}
  */
  readonly virtualNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#vm_size HdinsightInteractiveQueryCluster#vm_size}
  */
  readonly vmSize: string;
}

export function hdinsightInteractiveQueryClusterRolesZookeeperNodeToTerraform(struct?: HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference | HdinsightInteractiveQueryClusterRolesZookeeperNode): any {
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

export class HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRolesZookeeperNode | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterRolesZookeeperNode | undefined) {
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
export interface HdinsightInteractiveQueryClusterRoles {
  /**
  * head_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#head_node HdinsightInteractiveQueryCluster#head_node}
  */
  readonly headNode: HdinsightInteractiveQueryClusterRolesHeadNode;
  /**
  * worker_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#worker_node HdinsightInteractiveQueryCluster#worker_node}
  */
  readonly workerNode: HdinsightInteractiveQueryClusterRolesWorkerNode;
  /**
  * zookeeper_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#zookeeper_node HdinsightInteractiveQueryCluster#zookeeper_node}
  */
  readonly zookeeperNode: HdinsightInteractiveQueryClusterRolesZookeeperNode;
}

export function hdinsightInteractiveQueryClusterRolesToTerraform(struct?: HdinsightInteractiveQueryClusterRolesOutputReference | HdinsightInteractiveQueryClusterRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    head_node: hdinsightInteractiveQueryClusterRolesHeadNodeToTerraform(struct!.headNode),
    worker_node: hdinsightInteractiveQueryClusterRolesWorkerNodeToTerraform(struct!.workerNode),
    zookeeper_node: hdinsightInteractiveQueryClusterRolesZookeeperNodeToTerraform(struct!.zookeeperNode),
  }
}

export class HdinsightInteractiveQueryClusterRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headNode = this._headNode?.internalValue;
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

  public set internalValue(value: HdinsightInteractiveQueryClusterRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headNode.internalValue = undefined;
      this._workerNode.internalValue = undefined;
      this._zookeeperNode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headNode.internalValue = value.headNode;
      this._workerNode.internalValue = value.workerNode;
      this._zookeeperNode.internalValue = value.zookeeperNode;
    }
  }

  // head_node - computed: false, optional: false, required: true
  private _headNode = new HdinsightInteractiveQueryClusterRolesHeadNodeOutputReference(this, "head_node", true);
  public get headNode() {
    return this._headNode;
  }
  public putHeadNode(value: HdinsightInteractiveQueryClusterRolesHeadNode) {
    this._headNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headNodeInput() {
    return this._headNode.internalValue;
  }

  // worker_node - computed: false, optional: false, required: true
  private _workerNode = new HdinsightInteractiveQueryClusterRolesWorkerNodeOutputReference(this, "worker_node", true);
  public get workerNode() {
    return this._workerNode;
  }
  public putWorkerNode(value: HdinsightInteractiveQueryClusterRolesWorkerNode) {
    this._workerNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodeInput() {
    return this._workerNode.internalValue;
  }

  // zookeeper_node - computed: false, optional: false, required: true
  private _zookeeperNode = new HdinsightInteractiveQueryClusterRolesZookeeperNodeOutputReference(this, "zookeeper_node", true);
  public get zookeeperNode() {
    return this._zookeeperNode;
  }
  public putZookeeperNode(value: HdinsightInteractiveQueryClusterRolesZookeeperNode) {
    this._zookeeperNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zookeeperNodeInput() {
    return this._zookeeperNode.internalValue;
  }
}
export interface HdinsightInteractiveQueryClusterSecurityProfile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#aadds_resource_id HdinsightInteractiveQueryCluster#aadds_resource_id}
  */
  readonly aaddsResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#cluster_users_group_dns HdinsightInteractiveQueryCluster#cluster_users_group_dns}
  */
  readonly clusterUsersGroupDns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#domain_name HdinsightInteractiveQueryCluster#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#domain_user_password HdinsightInteractiveQueryCluster#domain_user_password}
  */
  readonly domainUserPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#domain_username HdinsightInteractiveQueryCluster#domain_username}
  */
  readonly domainUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#ldaps_urls HdinsightInteractiveQueryCluster#ldaps_urls}
  */
  readonly ldapsUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#msi_resource_id HdinsightInteractiveQueryCluster#msi_resource_id}
  */
  readonly msiResourceId: string;
}

export function hdinsightInteractiveQueryClusterSecurityProfileToTerraform(struct?: HdinsightInteractiveQueryClusterSecurityProfileOutputReference | HdinsightInteractiveQueryClusterSecurityProfile): any {
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

export class HdinsightInteractiveQueryClusterSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterSecurityProfile | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterSecurityProfile | undefined) {
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
export interface HdinsightInteractiveQueryClusterStorageAccount {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#storage_account_key HdinsightInteractiveQueryCluster#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#storage_container_id HdinsightInteractiveQueryCluster#storage_container_id}
  */
  readonly storageContainerId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}
  */
  readonly storageResourceId?: string;
}

export function hdinsightInteractiveQueryClusterStorageAccountToTerraform(struct?: HdinsightInteractiveQueryClusterStorageAccount | cdktf.IResolvable): any {
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

export interface HdinsightInteractiveQueryClusterStorageAccountGen2 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#filesystem_id HdinsightInteractiveQueryCluster#filesystem_id}
  */
  readonly filesystemId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#is_default HdinsightInteractiveQueryCluster#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#managed_identity_resource_id HdinsightInteractiveQueryCluster#managed_identity_resource_id}
  */
  readonly managedIdentityResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#storage_resource_id HdinsightInteractiveQueryCluster#storage_resource_id}
  */
  readonly storageResourceId: string;
}

export function hdinsightInteractiveQueryClusterStorageAccountGen2ToTerraform(struct?: HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference | HdinsightInteractiveQueryClusterStorageAccountGen2): any {
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

export class HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterStorageAccountGen2 | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterStorageAccountGen2 | undefined) {
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
export interface HdinsightInteractiveQueryClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#create HdinsightInteractiveQueryCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#delete HdinsightInteractiveQueryCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#read HdinsightInteractiveQueryCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster#update HdinsightInteractiveQueryCluster#update}
  */
  readonly update?: string;
}

export function hdinsightInteractiveQueryClusterTimeoutsToTerraform(struct?: HdinsightInteractiveQueryClusterTimeoutsOutputReference | HdinsightInteractiveQueryClusterTimeouts | cdktf.IResolvable): any {
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

export class HdinsightInteractiveQueryClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HdinsightInteractiveQueryClusterTimeouts | undefined {
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

  public set internalValue(value: HdinsightInteractiveQueryClusterTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster azurerm_hdinsight_interactive_query_cluster}
*/
export class HdinsightInteractiveQueryCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_hdinsight_interactive_query_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hdinsight_interactive_query_cluster azurerm_hdinsight_interactive_query_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HdinsightInteractiveQueryClusterConfig
  */
  public constructor(scope: Construct, id: string, config: HdinsightInteractiveQueryClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hdinsight_interactive_query_cluster',
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
    this._network.internalValue = config.network;
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

  // encryption_in_transit_enabled - computed: true, optional: true, required: false
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
  private _componentVersion = new HdinsightInteractiveQueryClusterComponentVersionOutputReference(this, "component_version", true);
  public get componentVersion() {
    return this._componentVersion;
  }
  public putComponentVersion(value: HdinsightInteractiveQueryClusterComponentVersion) {
    this._componentVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentVersionInput() {
    return this._componentVersion.internalValue;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new HdinsightInteractiveQueryClusterGatewayOutputReference(this, "gateway", true);
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: HdinsightInteractiveQueryClusterGateway) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // metastores - computed: false, optional: true, required: false
  private _metastores = new HdinsightInteractiveQueryClusterMetastoresOutputReference(this, "metastores", true);
  public get metastores() {
    return this._metastores;
  }
  public putMetastores(value: HdinsightInteractiveQueryClusterMetastores) {
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
  private _monitor = new HdinsightInteractiveQueryClusterMonitorOutputReference(this, "monitor", true);
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: HdinsightInteractiveQueryClusterMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new HdinsightInteractiveQueryClusterNetworkOutputReference(this, "network", true);
  public get network() {
    return this._network;
  }
  public putNetwork(value: HdinsightInteractiveQueryClusterNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new HdinsightInteractiveQueryClusterRolesOutputReference(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: HdinsightInteractiveQueryClusterRoles) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile = new HdinsightInteractiveQueryClusterSecurityProfileOutputReference(this, "security_profile", true);
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: HdinsightInteractiveQueryClusterSecurityProfile) {
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
  private _storageAccount?: HdinsightInteractiveQueryClusterStorageAccount[] | cdktf.IResolvable; 
  public get storageAccount() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('storage_account');
  }
  public set storageAccount(value: HdinsightInteractiveQueryClusterStorageAccount[] | cdktf.IResolvable) {
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
  private _storageAccountGen2 = new HdinsightInteractiveQueryClusterStorageAccountGen2OutputReference(this, "storage_account_gen2", true);
  public get storageAccountGen2() {
    return this._storageAccountGen2;
  }
  public putStorageAccountGen2(value: HdinsightInteractiveQueryClusterStorageAccountGen2) {
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
  private _timeouts = new HdinsightInteractiveQueryClusterTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HdinsightInteractiveQueryClusterTimeouts) {
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
      component_version: hdinsightInteractiveQueryClusterComponentVersionToTerraform(this._componentVersion.internalValue),
      gateway: hdinsightInteractiveQueryClusterGatewayToTerraform(this._gateway.internalValue),
      metastores: hdinsightInteractiveQueryClusterMetastoresToTerraform(this._metastores.internalValue),
      monitor: hdinsightInteractiveQueryClusterMonitorToTerraform(this._monitor.internalValue),
      network: hdinsightInteractiveQueryClusterNetworkToTerraform(this._network.internalValue),
      roles: hdinsightInteractiveQueryClusterRolesToTerraform(this._roles.internalValue),
      security_profile: hdinsightInteractiveQueryClusterSecurityProfileToTerraform(this._securityProfile.internalValue),
      storage_account: cdktf.listMapper(hdinsightInteractiveQueryClusterStorageAccountToTerraform)(this._storageAccount),
      storage_account_gen2: hdinsightInteractiveQueryClusterStorageAccountGen2ToTerraform(this._storageAccountGen2.internalValue),
      timeouts: hdinsightInteractiveQueryClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
