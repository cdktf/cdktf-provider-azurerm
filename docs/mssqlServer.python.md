# `mssqlServer` Submodule <a name="`mssqlServer` Submodule" id="@cdktf/provider-azurerm.mssqlServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MssqlServer <a name="MssqlServer" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server azurerm_mssql_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServer(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  version: str,
  administrator_login: str = None,
  administrator_login_password: str = None,
  administrator_login_password_wo: str = None,
  administrator_login_password_wo_version: typing.Union[int, float] = None,
  azuread_administrator: MssqlServerAzureadAdministrator = None,
  connection_policy: str = None,
  express_vulnerability_assessment_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: MssqlServerIdentity = None,
  minimum_tls_version: str = None,
  outbound_network_restriction_enabled: typing.Union[bool, IResolvable] = None,
  primary_user_assigned_identity_id: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MssqlServerTimeouts = None,
  transparent_data_encryption_key_vault_key_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#location MssqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#name MssqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#resource_group_name MssqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#version MssqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login MssqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password MssqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLoginPasswordWo">administrator_login_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo MssqlServer#administrator_login_password_wo}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLoginPasswordWoVersion">administrator_login_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo_version MssqlServer#administrator_login_password_wo_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.azureadAdministrator">azuread_administrator</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | azuread_administrator block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.connectionPolicy">connection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#connection_policy MssqlServer#connection_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.expressVulnerabilityAssessmentEnabled">express_vulnerability_assessment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#express_vulnerability_assessment_enabled MssqlServer#express_vulnerability_assessment_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#id MssqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#minimum_tls_version MssqlServer#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.outboundNetworkRestrictionEnabled">outbound_network_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#outbound_network_restriction_enabled MssqlServer#outbound_network_restriction_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.primaryUserAssignedIdentityId">primary_user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#primary_user_assigned_identity_id MssqlServer#primary_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#public_network_access_enabled MssqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tags MssqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.transparentDataEncryptionKeyVaultKeyId">transparent_data_encryption_key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#transparent_data_encryption_key_vault_key_id MssqlServer#transparent_data_encryption_key_vault_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#location MssqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#name MssqlServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#resource_group_name MssqlServer#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#version MssqlServer#version}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLogin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login MssqlServer#administrator_login}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLoginPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password MssqlServer#administrator_login_password}.

---

##### `administrator_login_password_wo`<sup>Optional</sup> <a name="administrator_login_password_wo" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLoginPasswordWo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo MssqlServer#administrator_login_password_wo}.

---

##### `administrator_login_password_wo_version`<sup>Optional</sup> <a name="administrator_login_password_wo_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.administratorLoginPasswordWoVersion"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo_version MssqlServer#administrator_login_password_wo_version}.

---

##### `azuread_administrator`<sup>Optional</sup> <a name="azuread_administrator" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.azureadAdministrator"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

azuread_administrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#azuread_administrator MssqlServer#azuread_administrator}

---

##### `connection_policy`<sup>Optional</sup> <a name="connection_policy" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.connectionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#connection_policy MssqlServer#connection_policy}.

---

##### `express_vulnerability_assessment_enabled`<sup>Optional</sup> <a name="express_vulnerability_assessment_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.expressVulnerabilityAssessmentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#express_vulnerability_assessment_enabled MssqlServer#express_vulnerability_assessment_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#id MssqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#identity MssqlServer#identity}

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.minimumTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#minimum_tls_version MssqlServer#minimum_tls_version}.

---

##### `outbound_network_restriction_enabled`<sup>Optional</sup> <a name="outbound_network_restriction_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.outboundNetworkRestrictionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#outbound_network_restriction_enabled MssqlServer#outbound_network_restriction_enabled}.

---

##### `primary_user_assigned_identity_id`<sup>Optional</sup> <a name="primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.primaryUserAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#primary_user_assigned_identity_id MssqlServer#primary_user_assigned_identity_id}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.publicNetworkAccessEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#public_network_access_enabled MssqlServer#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tags MssqlServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#timeouts MssqlServer#timeouts}

---

##### `transparent_data_encryption_key_vault_key_id`<sup>Optional</sup> <a name="transparent_data_encryption_key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.Initializer.parameter.transparentDataEncryptionKeyVaultKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#transparent_data_encryption_key_vault_key_id MssqlServer#transparent_data_encryption_key_vault_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator">put_azuread_administrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLogin">reset_administrator_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPassword">reset_administrator_login_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWo">reset_administrator_login_password_wo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWoVersion">reset_administrator_login_password_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAzureadAdministrator">reset_azuread_administrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetConnectionPolicy">reset_connection_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetExpressVulnerabilityAssessmentEnabled">reset_express_vulnerability_assessment_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetMinimumTlsVersion">reset_minimum_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetOutboundNetworkRestrictionEnabled">reset_outbound_network_restriction_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetPrimaryUserAssignedIdentityId">reset_primary_user_assigned_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetPublicNetworkAccessEnabled">reset_public_network_access_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetTransparentDataEncryptionKeyVaultKeyId">reset_transparent_data_encryption_key_vault_key_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_azuread_administrator` <a name="put_azuread_administrator" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator"></a>

```python
def put_azuread_administrator(
  login_username: str,
  object_id: str,
  azuread_authentication_only: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None
) -> None
```

###### `login_username`<sup>Required</sup> <a name="login_username" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator.parameter.loginUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#login_username MssqlServer#login_username}.

---

###### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#object_id MssqlServer#object_id}.

---

###### `azuread_authentication_only`<sup>Optional</sup> <a name="azuread_authentication_only" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator.parameter.azureadAuthenticationOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#azuread_authentication_only MssqlServer#azuread_authentication_only}.

---

###### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putAzureadAdministrator.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tenant_id MssqlServer#tenant_id}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#type MssqlServer#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#identity_ids MssqlServer#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#create MssqlServer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#delete MssqlServer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#read MssqlServer#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#update MssqlServer#update}.

---

##### `reset_administrator_login` <a name="reset_administrator_login" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLogin"></a>

```python
def reset_administrator_login() -> None
```

##### `reset_administrator_login_password` <a name="reset_administrator_login_password" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPassword"></a>

```python
def reset_administrator_login_password() -> None
```

##### `reset_administrator_login_password_wo` <a name="reset_administrator_login_password_wo" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWo"></a>

```python
def reset_administrator_login_password_wo() -> None
```

##### `reset_administrator_login_password_wo_version` <a name="reset_administrator_login_password_wo_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAdministratorLoginPasswordWoVersion"></a>

```python
def reset_administrator_login_password_wo_version() -> None
```

##### `reset_azuread_administrator` <a name="reset_azuread_administrator" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetAzureadAdministrator"></a>

```python
def reset_azuread_administrator() -> None
```

##### `reset_connection_policy` <a name="reset_connection_policy" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetConnectionPolicy"></a>

```python
def reset_connection_policy() -> None
```

##### `reset_express_vulnerability_assessment_enabled` <a name="reset_express_vulnerability_assessment_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetExpressVulnerabilityAssessmentEnabled"></a>

```python
def reset_express_vulnerability_assessment_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_minimum_tls_version` <a name="reset_minimum_tls_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetMinimumTlsVersion"></a>

```python
def reset_minimum_tls_version() -> None
```

##### `reset_outbound_network_restriction_enabled` <a name="reset_outbound_network_restriction_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetOutboundNetworkRestrictionEnabled"></a>

```python
def reset_outbound_network_restriction_enabled() -> None
```

##### `reset_primary_user_assigned_identity_id` <a name="reset_primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetPrimaryUserAssignedIdentityId"></a>

```python
def reset_primary_user_assigned_identity_id() -> None
```

##### `reset_public_network_access_enabled` <a name="reset_public_network_access_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetPublicNetworkAccessEnabled"></a>

```python
def reset_public_network_access_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_transparent_data_encryption_key_vault_key_id` <a name="reset_transparent_data_encryption_key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.resetTransparentDataEncryptionKeyVaultKeyId"></a>

```python
def reset_transparent_data_encryption_key_vault_key_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MssqlServer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServer.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MssqlServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MssqlServer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MssqlServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MssqlServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministrator">azuread_administrator</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference">MssqlServerAzureadAdministratorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.fullyQualifiedDomainName">fully_qualified_domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference">MssqlServerIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.restorableDroppedDatabaseIds">restorable_dropped_database_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference">MssqlServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginInput">administrator_login_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordInput">administrator_login_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoInput">administrator_login_password_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersionInput">administrator_login_password_wo_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministratorInput">azuread_administrator_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicyInput">connection_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabledInput">express_vulnerability_assessment_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersionInput">minimum_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabledInput">outbound_network_restriction_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityIdInput">primary_user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabledInput">public_network_access_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyIdInput">transparent_data_encryption_key_vault_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLogin">administrator_login</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWo">administrator_login_password_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersion">administrator_login_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicy">connection_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabled">express_vulnerability_assessment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabled">outbound_network_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityId">primary_user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyId">transparent_data_encryption_key_vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azuread_administrator`<sup>Required</sup> <a name="azuread_administrator" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministrator"></a>

```python
azuread_administrator: MssqlServerAzureadAdministratorOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference">MssqlServerAzureadAdministratorOutputReference</a>

---

##### `fully_qualified_domain_name`<sup>Required</sup> <a name="fully_qualified_domain_name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.fullyQualifiedDomainName"></a>

```python
fully_qualified_domain_name: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.identity"></a>

```python
identity: MssqlServerIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference">MssqlServerIdentityOutputReference</a>

---

##### `restorable_dropped_database_ids`<sup>Required</sup> <a name="restorable_dropped_database_ids" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.restorableDroppedDatabaseIds"></a>

```python
restorable_dropped_database_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.timeouts"></a>

```python
timeouts: MssqlServerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference">MssqlServerTimeoutsOutputReference</a>

---

##### `administrator_login_input`<sup>Optional</sup> <a name="administrator_login_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginInput"></a>

```python
administrator_login_input: str
```

- *Type:* str

---

##### `administrator_login_password_input`<sup>Optional</sup> <a name="administrator_login_password_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordInput"></a>

```python
administrator_login_password_input: str
```

- *Type:* str

---

##### `administrator_login_password_wo_input`<sup>Optional</sup> <a name="administrator_login_password_wo_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoInput"></a>

```python
administrator_login_password_wo_input: str
```

- *Type:* str

---

##### `administrator_login_password_wo_version_input`<sup>Optional</sup> <a name="administrator_login_password_wo_version_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersionInput"></a>

```python
administrator_login_password_wo_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `azuread_administrator_input`<sup>Optional</sup> <a name="azuread_administrator_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.azureadAdministratorInput"></a>

```python
azuread_administrator_input: MssqlServerAzureadAdministrator
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

---

##### `connection_policy_input`<sup>Optional</sup> <a name="connection_policy_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicyInput"></a>

```python
connection_policy_input: str
```

- *Type:* str

---

##### `express_vulnerability_assessment_enabled_input`<sup>Optional</sup> <a name="express_vulnerability_assessment_enabled_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabledInput"></a>

```python
express_vulnerability_assessment_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.identityInput"></a>

```python
identity_input: MssqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `minimum_tls_version_input`<sup>Optional</sup> <a name="minimum_tls_version_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersionInput"></a>

```python
minimum_tls_version_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `outbound_network_restriction_enabled_input`<sup>Optional</sup> <a name="outbound_network_restriction_enabled_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabledInput"></a>

```python
outbound_network_restriction_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_user_assigned_identity_id_input`<sup>Optional</sup> <a name="primary_user_assigned_identity_id_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityIdInput"></a>

```python
primary_user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `public_network_access_enabled_input`<sup>Optional</sup> <a name="public_network_access_enabled_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabledInput"></a>

```python
public_network_access_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MssqlServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>]

---

##### `transparent_data_encryption_key_vault_key_id_input`<sup>Optional</sup> <a name="transparent_data_encryption_key_vault_key_id_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyIdInput"></a>

```python
transparent_data_encryption_key_vault_key_id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `administrator_login`<sup>Required</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

---

##### `administrator_login_password`<sup>Required</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

---

##### `administrator_login_password_wo`<sup>Required</sup> <a name="administrator_login_password_wo" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWo"></a>

```python
administrator_login_password_wo: str
```

- *Type:* str

---

##### `administrator_login_password_wo_version`<sup>Required</sup> <a name="administrator_login_password_wo_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.administratorLoginPasswordWoVersion"></a>

```python
administrator_login_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_policy`<sup>Required</sup> <a name="connection_policy" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.connectionPolicy"></a>

```python
connection_policy: str
```

- *Type:* str

---

##### `express_vulnerability_assessment_enabled`<sup>Required</sup> <a name="express_vulnerability_assessment_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.expressVulnerabilityAssessmentEnabled"></a>

```python
express_vulnerability_assessment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `minimum_tls_version`<sup>Required</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `outbound_network_restriction_enabled`<sup>Required</sup> <a name="outbound_network_restriction_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.outboundNetworkRestrictionEnabled"></a>

```python
outbound_network_restriction_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `primary_user_assigned_identity_id`<sup>Required</sup> <a name="primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.primaryUserAssignedIdentityId"></a>

```python
primary_user_assigned_identity_id: str
```

- *Type:* str

---

##### `public_network_access_enabled`<sup>Required</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transparent_data_encryption_key_vault_key_id`<sup>Required</sup> <a name="transparent_data_encryption_key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.transparentDataEncryptionKeyVaultKeyId"></a>

```python
transparent_data_encryption_key_vault_key_id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mssqlServer.MssqlServer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MssqlServerAzureadAdministrator <a name="MssqlServerAzureadAdministrator" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerAzureadAdministrator(
  login_username: str,
  object_id: str,
  azuread_authentication_only: typing.Union[bool, IResolvable] = None,
  tenant_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.loginUsername">login_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#login_username MssqlServer#login_username}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#object_id MssqlServer#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.azureadAuthenticationOnly">azuread_authentication_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#azuread_authentication_only MssqlServer#azuread_authentication_only}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tenant_id MssqlServer#tenant_id}. |

---

##### `login_username`<sup>Required</sup> <a name="login_username" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.loginUsername"></a>

```python
login_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#login_username MssqlServer#login_username}.

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#object_id MssqlServer#object_id}.

---

##### `azuread_authentication_only`<sup>Optional</sup> <a name="azuread_authentication_only" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.azureadAuthenticationOnly"></a>

```python
azuread_authentication_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#azuread_authentication_only MssqlServer#azuread_authentication_only}.

---

##### `tenant_id`<sup>Optional</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tenant_id MssqlServer#tenant_id}.

---

### MssqlServerConfig <a name="MssqlServerConfig" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  version: str,
  administrator_login: str = None,
  administrator_login_password: str = None,
  administrator_login_password_wo: str = None,
  administrator_login_password_wo_version: typing.Union[int, float] = None,
  azuread_administrator: MssqlServerAzureadAdministrator = None,
  connection_policy: str = None,
  express_vulnerability_assessment_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: MssqlServerIdentity = None,
  minimum_tls_version: str = None,
  outbound_network_restriction_enabled: typing.Union[bool, IResolvable] = None,
  primary_user_assigned_identity_id: str = None,
  public_network_access_enabled: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: MssqlServerTimeouts = None,
  transparent_data_encryption_key_vault_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#location MssqlServer#location}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#name MssqlServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#resource_group_name MssqlServer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#version MssqlServer#version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLogin">administrator_login</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login MssqlServer#administrator_login}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPassword">administrator_login_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password MssqlServer#administrator_login_password}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWo">administrator_login_password_wo</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo MssqlServer#administrator_login_password_wo}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWoVersion">administrator_login_password_wo_version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo_version MssqlServer#administrator_login_password_wo_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.azureadAdministrator">azuread_administrator</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | azuread_administrator block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.connectionPolicy">connection_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#connection_policy MssqlServer#connection_policy}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.expressVulnerabilityAssessmentEnabled">express_vulnerability_assessment_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#express_vulnerability_assessment_enabled MssqlServer#express_vulnerability_assessment_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#id MssqlServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.minimumTlsVersion">minimum_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#minimum_tls_version MssqlServer#minimum_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.outboundNetworkRestrictionEnabled">outbound_network_restriction_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#outbound_network_restriction_enabled MssqlServer#outbound_network_restriction_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.primaryUserAssignedIdentityId">primary_user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#primary_user_assigned_identity_id MssqlServer#primary_user_assigned_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.publicNetworkAccessEnabled">public_network_access_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#public_network_access_enabled MssqlServer#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tags MssqlServer#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.transparentDataEncryptionKeyVaultKeyId">transparent_data_encryption_key_vault_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#transparent_data_encryption_key_vault_key_id MssqlServer#transparent_data_encryption_key_vault_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#location MssqlServer#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#name MssqlServer#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#resource_group_name MssqlServer#resource_group_name}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#version MssqlServer#version}.

---

##### `administrator_login`<sup>Optional</sup> <a name="administrator_login" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLogin"></a>

```python
administrator_login: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login MssqlServer#administrator_login}.

---

##### `administrator_login_password`<sup>Optional</sup> <a name="administrator_login_password" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPassword"></a>

```python
administrator_login_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password MssqlServer#administrator_login_password}.

---

##### `administrator_login_password_wo`<sup>Optional</sup> <a name="administrator_login_password_wo" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWo"></a>

```python
administrator_login_password_wo: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo MssqlServer#administrator_login_password_wo}.

---

##### `administrator_login_password_wo_version`<sup>Optional</sup> <a name="administrator_login_password_wo_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.administratorLoginPasswordWoVersion"></a>

```python
administrator_login_password_wo_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#administrator_login_password_wo_version MssqlServer#administrator_login_password_wo_version}.

---

##### `azuread_administrator`<sup>Optional</sup> <a name="azuread_administrator" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.azureadAdministrator"></a>

```python
azuread_administrator: MssqlServerAzureadAdministrator
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

azuread_administrator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#azuread_administrator MssqlServer#azuread_administrator}

---

##### `connection_policy`<sup>Optional</sup> <a name="connection_policy" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.connectionPolicy"></a>

```python
connection_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#connection_policy MssqlServer#connection_policy}.

---

##### `express_vulnerability_assessment_enabled`<sup>Optional</sup> <a name="express_vulnerability_assessment_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.expressVulnerabilityAssessmentEnabled"></a>

```python
express_vulnerability_assessment_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#express_vulnerability_assessment_enabled MssqlServer#express_vulnerability_assessment_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#id MssqlServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.identity"></a>

```python
identity: MssqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#identity MssqlServer#identity}

---

##### `minimum_tls_version`<sup>Optional</sup> <a name="minimum_tls_version" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.minimumTlsVersion"></a>

```python
minimum_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#minimum_tls_version MssqlServer#minimum_tls_version}.

---

##### `outbound_network_restriction_enabled`<sup>Optional</sup> <a name="outbound_network_restriction_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.outboundNetworkRestrictionEnabled"></a>

```python
outbound_network_restriction_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#outbound_network_restriction_enabled MssqlServer#outbound_network_restriction_enabled}.

---

##### `primary_user_assigned_identity_id`<sup>Optional</sup> <a name="primary_user_assigned_identity_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.primaryUserAssignedIdentityId"></a>

```python
primary_user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#primary_user_assigned_identity_id MssqlServer#primary_user_assigned_identity_id}.

---

##### `public_network_access_enabled`<sup>Optional</sup> <a name="public_network_access_enabled" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.publicNetworkAccessEnabled"></a>

```python
public_network_access_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#public_network_access_enabled MssqlServer#public_network_access_enabled}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#tags MssqlServer#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.timeouts"></a>

```python
timeouts: MssqlServerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#timeouts MssqlServer#timeouts}

---

##### `transparent_data_encryption_key_vault_key_id`<sup>Optional</sup> <a name="transparent_data_encryption_key_vault_key_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerConfig.property.transparentDataEncryptionKeyVaultKeyId"></a>

```python
transparent_data_encryption_key_vault_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#transparent_data_encryption_key_vault_key_id MssqlServer#transparent_data_encryption_key_vault_key_id}.

---

### MssqlServerIdentity <a name="MssqlServerIdentity" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#type MssqlServer#type}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#identity_ids MssqlServer#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#type MssqlServer#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#identity_ids MssqlServer#identity_ids}.

---

### MssqlServerTimeouts <a name="MssqlServerTimeouts" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#create MssqlServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#delete MssqlServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#read MssqlServer#read}. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#update MssqlServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#create MssqlServer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#delete MssqlServer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#read MssqlServer#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.34.0/docs/resources/mssql_server#update MssqlServer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MssqlServerAzureadAdministratorOutputReference <a name="MssqlServerAzureadAdministratorOutputReference" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerAzureadAdministratorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetAzureadAuthenticationOnly">reset_azuread_authentication_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetTenantId">reset_tenant_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azuread_authentication_only` <a name="reset_azuread_authentication_only" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetAzureadAuthenticationOnly"></a>

```python
def reset_azuread_authentication_only() -> None
```

##### `reset_tenant_id` <a name="reset_tenant_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.resetTenantId"></a>

```python
def reset_tenant_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnlyInput">azuread_authentication_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsernameInput">login_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnly">azuread_authentication_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsername">login_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azuread_authentication_only_input`<sup>Optional</sup> <a name="azuread_authentication_only_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnlyInput"></a>

```python
azuread_authentication_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `login_username_input`<sup>Optional</sup> <a name="login_username_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsernameInput"></a>

```python
login_username_input: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `azuread_authentication_only`<sup>Required</sup> <a name="azuread_authentication_only" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.azureadAuthenticationOnly"></a>

```python
azuread_authentication_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `login_username`<sup>Required</sup> <a name="login_username" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.loginUsername"></a>

```python
login_username: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministratorOutputReference.property.internalValue"></a>

```python
internal_value: MssqlServerAzureadAdministrator
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerAzureadAdministrator">MssqlServerAzureadAdministrator</a>

---


### MssqlServerIdentityOutputReference <a name="MssqlServerIdentityOutputReference" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentityOutputReference.property.internalValue"></a>

```python
internal_value: MssqlServerIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerIdentity">MssqlServerIdentity</a>

---


### MssqlServerTimeoutsOutputReference <a name="MssqlServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import mssql_server

mssqlServer.MssqlServerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MssqlServerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.mssqlServer.MssqlServerTimeouts">MssqlServerTimeouts</a>]

---



