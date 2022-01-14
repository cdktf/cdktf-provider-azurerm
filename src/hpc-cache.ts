// https://www.terraform.io/docs/providers/azurerm/r/hpc_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HpcCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#cache_size_in_gb HpcCache#cache_size_in_gb}
  */
  readonly cacheSizeInGb: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#location HpcCache#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#mtu HpcCache#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#name HpcCache#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#ntp_server HpcCache#ntp_server}
  */
  readonly ntpServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#resource_group_name HpcCache#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}
  */
  readonly rootSquashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#sku_name HpcCache#sku_name}
  */
  readonly skuName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#subnet_id HpcCache#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#tags HpcCache#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * default_access_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#default_access_policy HpcCache#default_access_policy}
  */
  readonly defaultAccessPolicy?: HpcCacheDefaultAccessPolicy;
  /**
  * directory_active_directory block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#directory_active_directory HpcCache#directory_active_directory}
  */
  readonly directoryActiveDirectory?: HpcCacheDirectoryActiveDirectory;
  /**
  * directory_flat_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#directory_flat_file HpcCache#directory_flat_file}
  */
  readonly directoryFlatFile?: HpcCacheDirectoryFlatFile;
  /**
  * directory_ldap block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#directory_ldap HpcCache#directory_ldap}
  */
  readonly directoryLdap?: HpcCacheDirectoryLdap;
  /**
  * dns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#dns HpcCache#dns}
  */
  readonly dns?: HpcCacheDns;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#timeouts HpcCache#timeouts}
  */
  readonly timeouts?: HpcCacheTimeouts;
}
export interface HpcCacheDefaultAccessPolicyAccessRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#access HpcCache#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#anonymous_gid HpcCache#anonymous_gid}
  */
  readonly anonymousGid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#anonymous_uid HpcCache#anonymous_uid}
  */
  readonly anonymousUid?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#filter HpcCache#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#root_squash_enabled HpcCache#root_squash_enabled}
  */
  readonly rootSquashEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#scope HpcCache#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#submount_access_enabled HpcCache#submount_access_enabled}
  */
  readonly submountAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#suid_enabled HpcCache#suid_enabled}
  */
  readonly suidEnabled?: boolean | cdktf.IResolvable;
}

export function hpcCacheDefaultAccessPolicyAccessRuleToTerraform(struct?: HpcCacheDefaultAccessPolicyAccessRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    anonymous_gid: cdktf.numberToTerraform(struct!.anonymousGid),
    anonymous_uid: cdktf.numberToTerraform(struct!.anonymousUid),
    filter: cdktf.stringToTerraform(struct!.filter),
    root_squash_enabled: cdktf.booleanToTerraform(struct!.rootSquashEnabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    submount_access_enabled: cdktf.booleanToTerraform(struct!.submountAccessEnabled),
    suid_enabled: cdktf.booleanToTerraform(struct!.suidEnabled),
  }
}

export interface HpcCacheDefaultAccessPolicy {
  /**
  * access_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#access_rule HpcCache#access_rule}
  */
  readonly accessRule: HpcCacheDefaultAccessPolicyAccessRule[];
}

export function hpcCacheDefaultAccessPolicyToTerraform(struct?: HpcCacheDefaultAccessPolicyOutputReference | HpcCacheDefaultAccessPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_rule: cdktf.listMapper(hpcCacheDefaultAccessPolicyAccessRuleToTerraform)(struct!.accessRule),
  }
}

export class HpcCacheDefaultAccessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheDefaultAccessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRule !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRule = this._accessRule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDefaultAccessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRule = value.accessRule;
    }
  }

  // access_rule - computed: false, optional: false, required: true
  private _accessRule?: HpcCacheDefaultAccessPolicyAccessRule[]; 
  public get accessRule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_rule') as any;
  }
  public set accessRule(value: HpcCacheDefaultAccessPolicyAccessRule[]) {
    this._accessRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRuleInput() {
    return this._accessRule;
  }
}
export interface HpcCacheDirectoryActiveDirectory {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#cache_netbios_name HpcCache#cache_netbios_name}
  */
  readonly cacheNetbiosName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#dns_primary_ip HpcCache#dns_primary_ip}
  */
  readonly dnsPrimaryIp: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#dns_secondary_ip HpcCache#dns_secondary_ip}
  */
  readonly dnsSecondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#domain_name HpcCache#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#domain_netbios_name HpcCache#domain_netbios_name}
  */
  readonly domainNetbiosName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#password HpcCache#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#username HpcCache#username}
  */
  readonly username: string;
}

export function hpcCacheDirectoryActiveDirectoryToTerraform(struct?: HpcCacheDirectoryActiveDirectoryOutputReference | HpcCacheDirectoryActiveDirectory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_netbios_name: cdktf.stringToTerraform(struct!.cacheNetbiosName),
    dns_primary_ip: cdktf.stringToTerraform(struct!.dnsPrimaryIp),
    dns_secondary_ip: cdktf.stringToTerraform(struct!.dnsSecondaryIp),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_netbios_name: cdktf.stringToTerraform(struct!.domainNetbiosName),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class HpcCacheDirectoryActiveDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheDirectoryActiveDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheNetbiosName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheNetbiosName = this._cacheNetbiosName;
    }
    if (this._dnsPrimaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPrimaryIp = this._dnsPrimaryIp;
    }
    if (this._dnsSecondaryIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSecondaryIp = this._dnsSecondaryIp;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNetbiosName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNetbiosName = this._domainNetbiosName;
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

  public set internalValue(value: HpcCacheDirectoryActiveDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheNetbiosName = undefined;
      this._dnsPrimaryIp = undefined;
      this._dnsSecondaryIp = undefined;
      this._domainName = undefined;
      this._domainNetbiosName = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheNetbiosName = value.cacheNetbiosName;
      this._dnsPrimaryIp = value.dnsPrimaryIp;
      this._dnsSecondaryIp = value.dnsSecondaryIp;
      this._domainName = value.domainName;
      this._domainNetbiosName = value.domainNetbiosName;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // cache_netbios_name - computed: false, optional: false, required: true
  private _cacheNetbiosName?: string; 
  public get cacheNetbiosName() {
    return this.getStringAttribute('cache_netbios_name');
  }
  public set cacheNetbiosName(value: string) {
    this._cacheNetbiosName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNetbiosNameInput() {
    return this._cacheNetbiosName;
  }

  // dns_primary_ip - computed: false, optional: false, required: true
  private _dnsPrimaryIp?: string; 
  public get dnsPrimaryIp() {
    return this.getStringAttribute('dns_primary_ip');
  }
  public set dnsPrimaryIp(value: string) {
    this._dnsPrimaryIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPrimaryIpInput() {
    return this._dnsPrimaryIp;
  }

  // dns_secondary_ip - computed: false, optional: true, required: false
  private _dnsSecondaryIp?: string; 
  public get dnsSecondaryIp() {
    return this.getStringAttribute('dns_secondary_ip');
  }
  public set dnsSecondaryIp(value: string) {
    this._dnsSecondaryIp = value;
  }
  public resetDnsSecondaryIp() {
    this._dnsSecondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSecondaryIpInput() {
    return this._dnsSecondaryIp;
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

  // domain_netbios_name - computed: false, optional: false, required: true
  private _domainNetbiosName?: string; 
  public get domainNetbiosName() {
    return this.getStringAttribute('domain_netbios_name');
  }
  public set domainNetbiosName(value: string) {
    this._domainNetbiosName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNetbiosNameInput() {
    return this._domainNetbiosName;
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
export interface HpcCacheDirectoryFlatFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#group_file_uri HpcCache#group_file_uri}
  */
  readonly groupFileUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#password_file_uri HpcCache#password_file_uri}
  */
  readonly passwordFileUri: string;
}

export function hpcCacheDirectoryFlatFileToTerraform(struct?: HpcCacheDirectoryFlatFileOutputReference | HpcCacheDirectoryFlatFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_file_uri: cdktf.stringToTerraform(struct!.groupFileUri),
    password_file_uri: cdktf.stringToTerraform(struct!.passwordFileUri),
  }
}

export class HpcCacheDirectoryFlatFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheDirectoryFlatFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFileUri = this._groupFileUri;
    }
    if (this._passwordFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFileUri = this._passwordFileUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryFlatFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupFileUri = undefined;
      this._passwordFileUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupFileUri = value.groupFileUri;
      this._passwordFileUri = value.passwordFileUri;
    }
  }

  // group_file_uri - computed: false, optional: false, required: true
  private _groupFileUri?: string; 
  public get groupFileUri() {
    return this.getStringAttribute('group_file_uri');
  }
  public set groupFileUri(value: string) {
    this._groupFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFileUriInput() {
    return this._groupFileUri;
  }

  // password_file_uri - computed: false, optional: false, required: true
  private _passwordFileUri?: string; 
  public get passwordFileUri() {
    return this.getStringAttribute('password_file_uri');
  }
  public set passwordFileUri(value: string) {
    this._passwordFileUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileUriInput() {
    return this._passwordFileUri;
  }
}
export interface HpcCacheDirectoryLdapBind {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#dn HpcCache#dn}
  */
  readonly dn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#password HpcCache#password}
  */
  readonly password: string;
}

export function hpcCacheDirectoryLdapBindToTerraform(struct?: HpcCacheDirectoryLdapBindOutputReference | HpcCacheDirectoryLdapBind): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dn: cdktf.stringToTerraform(struct!.dn),
    password: cdktf.stringToTerraform(struct!.password),
  }
}

export class HpcCacheDirectoryLdapBindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheDirectoryLdapBind | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dn = this._dn;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryLdapBind | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dn = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dn = value.dn;
      this._password = value.password;
    }
  }

  // dn - computed: false, optional: false, required: true
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
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
}
export interface HpcCacheDirectoryLdap {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#base_dn HpcCache#base_dn}
  */
  readonly baseDn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#certificate_validation_uri HpcCache#certificate_validation_uri}
  */
  readonly certificateValidationUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#download_certificate_automatically HpcCache#download_certificate_automatically}
  */
  readonly downloadCertificateAutomatically?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#encrypted HpcCache#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#server HpcCache#server}
  */
  readonly server: string;
  /**
  * bind block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#bind HpcCache#bind}
  */
  readonly bind?: HpcCacheDirectoryLdapBind;
}

export function hpcCacheDirectoryLdapToTerraform(struct?: HpcCacheDirectoryLdapOutputReference | HpcCacheDirectoryLdap): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    certificate_validation_uri: cdktf.stringToTerraform(struct!.certificateValidationUri),
    download_certificate_automatically: cdktf.booleanToTerraform(struct!.downloadCertificateAutomatically),
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    server: cdktf.stringToTerraform(struct!.server),
    bind: hpcCacheDirectoryLdapBindToTerraform(struct!.bind),
  }
}

export class HpcCacheDirectoryLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheDirectoryLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._certificateValidationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateValidationUri = this._certificateValidationUri;
    }
    if (this._downloadCertificateAutomatically !== undefined) {
      hasAnyValues = true;
      internalValueResult.downloadCertificateAutomatically = this._downloadCertificateAutomatically;
    }
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._bind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bind = this._bind?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDirectoryLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseDn = undefined;
      this._certificateValidationUri = undefined;
      this._downloadCertificateAutomatically = undefined;
      this._encrypted = undefined;
      this._server = undefined;
      this._bind.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseDn = value.baseDn;
      this._certificateValidationUri = value.certificateValidationUri;
      this._downloadCertificateAutomatically = value.downloadCertificateAutomatically;
      this._encrypted = value.encrypted;
      this._server = value.server;
      this._bind.internalValue = value.bind;
    }
  }

  // base_dn - computed: false, optional: false, required: true
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // certificate_validation_uri - computed: false, optional: true, required: false
  private _certificateValidationUri?: string; 
  public get certificateValidationUri() {
    return this.getStringAttribute('certificate_validation_uri');
  }
  public set certificateValidationUri(value: string) {
    this._certificateValidationUri = value;
  }
  public resetCertificateValidationUri() {
    this._certificateValidationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateValidationUriInput() {
    return this._certificateValidationUri;
  }

  // download_certificate_automatically - computed: false, optional: true, required: false
  private _downloadCertificateAutomatically?: boolean | cdktf.IResolvable; 
  public get downloadCertificateAutomatically() {
    return this.getBooleanAttribute('download_certificate_automatically') as any;
  }
  public set downloadCertificateAutomatically(value: boolean | cdktf.IResolvable) {
    this._downloadCertificateAutomatically = value;
  }
  public resetDownloadCertificateAutomatically() {
    this._downloadCertificateAutomatically = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadCertificateAutomaticallyInput() {
    return this._downloadCertificateAutomatically;
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted') as any;
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
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

  // bind - computed: false, optional: true, required: false
  private _bind = new HpcCacheDirectoryLdapBindOutputReference(this as any, "bind", true);
  public get bind() {
    return this._bind;
  }
  public putBind(value: HpcCacheDirectoryLdapBind) {
    this._bind.internalValue = value;
  }
  public resetBind() {
    this._bind.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindInput() {
    return this._bind.internalValue;
  }
}
export interface HpcCacheDns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#search_domain HpcCache#search_domain}
  */
  readonly searchDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#servers HpcCache#servers}
  */
  readonly servers: string[];
}

export function hpcCacheDnsToTerraform(struct?: HpcCacheDnsOutputReference | HpcCacheDns): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_domain: cdktf.stringToTerraform(struct!.searchDomain),
    servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.servers),
  }
}

export class HpcCacheDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomain = this._searchDomain;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HpcCacheDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchDomain = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchDomain = value.searchDomain;
      this._servers = value.servers;
    }
  }

  // search_domain - computed: false, optional: true, required: false
  private _searchDomain?: string; 
  public get searchDomain() {
    return this.getStringAttribute('search_domain');
  }
  public set searchDomain(value: string) {
    this._searchDomain = value;
  }
  public resetSearchDomain() {
    this._searchDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainInput() {
    return this._searchDomain;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface HpcCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#create HpcCache#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#delete HpcCache#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#read HpcCache#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache#update HpcCache#update}
  */
  readonly update?: string;
}

export function hpcCacheTimeoutsToTerraform(struct?: HpcCacheTimeoutsOutputReference | HpcCacheTimeouts): any {
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

export class HpcCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): HpcCacheTimeouts | undefined {
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

  public set internalValue(value: HpcCacheTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache azurerm_hpc_cache}
*/
export class HpcCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_hpc_cache";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/hpc_cache azurerm_hpc_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HpcCacheConfig
  */
  public constructor(scope: Construct, id: string, config: HpcCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_hpc_cache',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cacheSizeInGb = config.cacheSizeInGb;
    this._location = config.location;
    this._mtu = config.mtu;
    this._name = config.name;
    this._ntpServer = config.ntpServer;
    this._resourceGroupName = config.resourceGroupName;
    this._rootSquashEnabled = config.rootSquashEnabled;
    this._skuName = config.skuName;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._defaultAccessPolicy.internalValue = config.defaultAccessPolicy;
    this._directoryActiveDirectory.internalValue = config.directoryActiveDirectory;
    this._directoryFlatFile.internalValue = config.directoryFlatFile;
    this._directoryLdap.internalValue = config.directoryLdap;
    this._dns.internalValue = config.dns;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_size_in_gb - computed: false, optional: false, required: true
  private _cacheSizeInGb?: number; 
  public get cacheSizeInGb() {
    return this.getNumberAttribute('cache_size_in_gb');
  }
  public set cacheSizeInGb(value: number) {
    this._cacheSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInGbInput() {
    return this._cacheSizeInGb;
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

  // mount_addresses - computed: true, optional: false, required: false
  public get mountAddresses() {
    return this.getListAttribute('mount_addresses');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // ntp_server - computed: false, optional: true, required: false
  private _ntpServer?: string; 
  public get ntpServer() {
    return this.getStringAttribute('ntp_server');
  }
  public set ntpServer(value: string) {
    this._ntpServer = value;
  }
  public resetNtpServer() {
    this._ntpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer;
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

  // root_squash_enabled - computed: true, optional: true, required: false
  private _rootSquashEnabled?: boolean | cdktf.IResolvable; 
  public get rootSquashEnabled() {
    return this.getBooleanAttribute('root_squash_enabled') as any;
  }
  public set rootSquashEnabled(value: boolean | cdktf.IResolvable) {
    this._rootSquashEnabled = value;
  }
  public resetRootSquashEnabled() {
    this._rootSquashEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSquashEnabledInput() {
    return this._rootSquashEnabled;
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName?: string; 
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }
  public set skuName(value: string) {
    this._skuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuNameInput() {
    return this._skuName;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // default_access_policy - computed: false, optional: true, required: false
  private _defaultAccessPolicy = new HpcCacheDefaultAccessPolicyOutputReference(this as any, "default_access_policy", true);
  public get defaultAccessPolicy() {
    return this._defaultAccessPolicy;
  }
  public putDefaultAccessPolicy(value: HpcCacheDefaultAccessPolicy) {
    this._defaultAccessPolicy.internalValue = value;
  }
  public resetDefaultAccessPolicy() {
    this._defaultAccessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessPolicyInput() {
    return this._defaultAccessPolicy.internalValue;
  }

  // directory_active_directory - computed: false, optional: true, required: false
  private _directoryActiveDirectory = new HpcCacheDirectoryActiveDirectoryOutputReference(this as any, "directory_active_directory", true);
  public get directoryActiveDirectory() {
    return this._directoryActiveDirectory;
  }
  public putDirectoryActiveDirectory(value: HpcCacheDirectoryActiveDirectory) {
    this._directoryActiveDirectory.internalValue = value;
  }
  public resetDirectoryActiveDirectory() {
    this._directoryActiveDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryActiveDirectoryInput() {
    return this._directoryActiveDirectory.internalValue;
  }

  // directory_flat_file - computed: false, optional: true, required: false
  private _directoryFlatFile = new HpcCacheDirectoryFlatFileOutputReference(this as any, "directory_flat_file", true);
  public get directoryFlatFile() {
    return this._directoryFlatFile;
  }
  public putDirectoryFlatFile(value: HpcCacheDirectoryFlatFile) {
    this._directoryFlatFile.internalValue = value;
  }
  public resetDirectoryFlatFile() {
    this._directoryFlatFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryFlatFileInput() {
    return this._directoryFlatFile.internalValue;
  }

  // directory_ldap - computed: false, optional: true, required: false
  private _directoryLdap = new HpcCacheDirectoryLdapOutputReference(this as any, "directory_ldap", true);
  public get directoryLdap() {
    return this._directoryLdap;
  }
  public putDirectoryLdap(value: HpcCacheDirectoryLdap) {
    this._directoryLdap.internalValue = value;
  }
  public resetDirectoryLdap() {
    this._directoryLdap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryLdapInput() {
    return this._directoryLdap.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new HpcCacheDnsOutputReference(this as any, "dns", true);
  public get dns() {
    return this._dns;
  }
  public putDns(value: HpcCacheDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HpcCacheTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HpcCacheTimeouts) {
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
      cache_size_in_gb: cdktf.numberToTerraform(this._cacheSizeInGb),
      location: cdktf.stringToTerraform(this._location),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      ntp_server: cdktf.stringToTerraform(this._ntpServer),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      root_squash_enabled: cdktf.booleanToTerraform(this._rootSquashEnabled),
      sku_name: cdktf.stringToTerraform(this._skuName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      default_access_policy: hpcCacheDefaultAccessPolicyToTerraform(this._defaultAccessPolicy.internalValue),
      directory_active_directory: hpcCacheDirectoryActiveDirectoryToTerraform(this._directoryActiveDirectory.internalValue),
      directory_flat_file: hpcCacheDirectoryFlatFileToTerraform(this._directoryFlatFile.internalValue),
      directory_ldap: hpcCacheDirectoryLdapToTerraform(this._directoryLdap.internalValue),
      dns: hpcCacheDnsToTerraform(this._dns.internalValue),
      timeouts: hpcCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
