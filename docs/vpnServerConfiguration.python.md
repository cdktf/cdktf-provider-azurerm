# `azurerm_vpn_server_configuration`

Refer to the Terraform Registory for docs: [`azurerm_vpn_server_configuration`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration).

# `vpnServerConfiguration` Submodule <a name="`vpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.vpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnServerConfiguration <a name="VpnServerConfiguration" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfiguration(
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
  vpn_authentication_types: typing.List[str],
  azure_active_directory_authentication: typing.Union[IResolvable, typing.List[VpnServerConfigurationAzureActiveDirectoryAuthentication]] = None,
  client_revoked_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRevokedCertificate]] = None,
  client_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRootCertificate]] = None,
  id: str = None,
  ipsec_policy: VpnServerConfigurationIpsecPolicy = None,
  radius: VpnServerConfigurationRadius = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpnServerConfigurationTimeouts = None,
  vpn_protocols: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.vpnAuthenticationTypes">vpn_authentication_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.azureActiveDirectoryAuthentication">azure_active_directory_authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]</code> | azure_active_directory_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.clientRevokedCertificate">client_revoked_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]</code> | client_revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.clientRootCertificate">client_root_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.radius">radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | radius block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.vpnProtocols">vpn_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}.

---

##### `vpn_authentication_types`<sup>Required</sup> <a name="vpn_authentication_types" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.vpnAuthenticationTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}.

---

##### `azure_active_directory_authentication`<sup>Optional</sup> <a name="azure_active_directory_authentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.azureActiveDirectoryAuthentication"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]

azure_active_directory_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}

---

##### `client_revoked_certificate`<sup>Optional</sup> <a name="client_revoked_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.clientRevokedCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]

client_revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}

---

##### `client_root_certificate`<sup>Optional</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.clientRootCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsec_policy`<sup>Optional</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.ipsecPolicy"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_policy VpnServerConfiguration#ipsec_policy}

---

##### `radius`<sup>Optional</sup> <a name="radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.radius"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#radius VpnServerConfiguration#radius}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#timeouts VpnServerConfiguration#timeouts}

---

##### `vpn_protocols`<sup>Optional</sup> <a name="vpn_protocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.Initializer.parameter.vpnProtocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication">put_azure_active_directory_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate">put_client_revoked_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate">put_client_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy">put_ipsec_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius">put_radius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetAzureActiveDirectoryAuthentication">reset_azure_active_directory_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRevokedCertificate">reset_client_revoked_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRootCertificate">reset_client_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetIpsecPolicy">reset_ipsec_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetRadius">reset_radius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetVpnProtocols">reset_vpn_protocols</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_azure_active_directory_authentication` <a name="put_azure_active_directory_authentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication"></a>

```python
def put_azure_active_directory_authentication(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationAzureActiveDirectoryAuthentication]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putAzureActiveDirectoryAuthentication.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]

---

##### `put_client_revoked_certificate` <a name="put_client_revoked_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate"></a>

```python
def put_client_revoked_certificate(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRevokedCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRevokedCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]

---

##### `put_client_root_certificate` <a name="put_client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate"></a>

```python
def put_client_root_certificate(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRootCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putClientRootCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]

---

##### `put_ipsec_policy` <a name="put_ipsec_policy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy"></a>

```python
def put_ipsec_policy(
  dh_group: str,
  ike_encryption: str,
  ike_integrity: str,
  ipsec_encryption: str,
  ipsec_integrity: str,
  pfs_group: str,
  sa_data_size_kilobytes: typing.Union[int, float],
  sa_lifetime_seconds: typing.Union[int, float]
) -> None
```

###### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.dhGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}.

---

###### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.ikeEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}.

---

###### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.ikeIntegrity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}.

---

###### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.ipsecEncryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}.

---

###### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.ipsecIntegrity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}.

---

###### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.pfsGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}.

---

###### `sa_data_size_kilobytes`<sup>Required</sup> <a name="sa_data_size_kilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.saDataSizeKilobytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}.

---

###### `sa_lifetime_seconds`<sup>Required</sup> <a name="sa_lifetime_seconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putIpsecPolicy.parameter.saLifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}.

---

##### `put_radius` <a name="put_radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius"></a>

```python
def put_radius(
  client_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusClientRootCertificate]] = None,
  server: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServer]] = None,
  server_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServerRootCertificate]] = None
) -> None
```

###### `client_root_certificate`<sup>Optional</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius.parameter.clientRootCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

###### `server`<sup>Optional</sup> <a name="server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius.parameter.server"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#server VpnServerConfiguration#server}

---

###### `server_root_certificate`<sup>Optional</sup> <a name="server_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putRadius.parameter.serverRootCertificate"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]

server_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}.

---

##### `reset_azure_active_directory_authentication` <a name="reset_azure_active_directory_authentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetAzureActiveDirectoryAuthentication"></a>

```python
def reset_azure_active_directory_authentication() -> None
```

##### `reset_client_revoked_certificate` <a name="reset_client_revoked_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRevokedCertificate"></a>

```python
def reset_client_revoked_certificate() -> None
```

##### `reset_client_root_certificate` <a name="reset_client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetClientRootCertificate"></a>

```python
def reset_client_root_certificate() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ipsec_policy` <a name="reset_ipsec_policy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetIpsecPolicy"></a>

```python
def reset_ipsec_policy() -> None
```

##### `reset_radius` <a name="reset_radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetRadius"></a>

```python
def reset_radius() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vpn_protocols` <a name="reset_vpn_protocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.resetVpnProtocols"></a>

```python
def reset_vpn_protocols() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthentication">azure_active_directory_authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList">VpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificate">client_revoked_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList">VpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificate">client_root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList">VpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference">VpnServerConfigurationIpsecPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radius">radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference">VpnServerConfigurationRadiusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference">VpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthenticationInput">azure_active_directory_authentication_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificateInput">client_revoked_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificateInput">client_root_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicyInput">ipsec_policy_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radiusInput">radius_input</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypesInput">vpn_authentication_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocolsInput">vpn_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypes">vpn_authentication_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocols">vpn_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `azure_active_directory_authentication`<sup>Required</sup> <a name="azure_active_directory_authentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```python
azure_active_directory_authentication: VpnServerConfigurationAzureActiveDirectoryAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList">VpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `client_revoked_certificate`<sup>Required</sup> <a name="client_revoked_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificate"></a>

```python
client_revoked_certificate: VpnServerConfigurationClientRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList">VpnServerConfigurationClientRevokedCertificateList</a>

---

##### `client_root_certificate`<sup>Required</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificate"></a>

```python
client_root_certificate: VpnServerConfigurationClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList">VpnServerConfigurationClientRootCertificateList</a>

---

##### `ipsec_policy`<sup>Required</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicy"></a>

```python
ipsec_policy: VpnServerConfigurationIpsecPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference">VpnServerConfigurationIpsecPolicyOutputReference</a>

---

##### `radius`<sup>Required</sup> <a name="radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radius"></a>

```python
radius: VpnServerConfigurationRadiusOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference">VpnServerConfigurationRadiusOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeouts"></a>

```python
timeouts: VpnServerConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference">VpnServerConfigurationTimeoutsOutputReference</a>

---

##### `azure_active_directory_authentication_input`<sup>Optional</sup> <a name="azure_active_directory_authentication_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.azureActiveDirectoryAuthenticationInput"></a>

```python
azure_active_directory_authentication_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationAzureActiveDirectoryAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]

---

##### `client_revoked_certificate_input`<sup>Optional</sup> <a name="client_revoked_certificate_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRevokedCertificateInput"></a>

```python
client_revoked_certificate_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]

---

##### `client_root_certificate_input`<sup>Optional</sup> <a name="client_root_certificate_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.clientRootCertificateInput"></a>

```python
client_root_certificate_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ipsec_policy_input`<sup>Optional</sup> <a name="ipsec_policy_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.ipsecPolicyInput"></a>

```python
ipsec_policy_input: VpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `radius_input`<sup>Optional</sup> <a name="radius_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.radiusInput"></a>

```python
radius_input: VpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[VpnServerConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>, cdktf.IResolvable]

---

##### `vpn_authentication_types_input`<sup>Optional</sup> <a name="vpn_authentication_types_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypesInput"></a>

```python
vpn_authentication_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_protocols_input`<sup>Optional</sup> <a name="vpn_protocols_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocolsInput"></a>

```python
vpn_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpn_authentication_types`<sup>Required</sup> <a name="vpn_authentication_types" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```python
vpn_authentication_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpn_protocols`<sup>Required</sup> <a name="vpn_protocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.vpnProtocols"></a>

```python
vpn_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnServerConfigurationAzureActiveDirectoryAuthentication <a name="VpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication(
  audience: str,
  issuer: str,
  tenant: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.audience">audience</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.tenant">tenant</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.audience"></a>

```python
audience: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#audience VpnServerConfiguration#audience}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#issuer VpnServerConfiguration#issuer}.

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#tenant VpnServerConfiguration#tenant}.

---

### VpnServerConfigurationClientRevokedCertificate <a name="VpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate(
  name: str,
  thumbprint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}.

---

### VpnServerConfigurationClientRootCertificate <a name="VpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationClientRootCertificate(
  name: str,
  public_cert_data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.publicCertData">public_cert_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}.

---

### VpnServerConfigurationConfig <a name="VpnServerConfigurationConfig" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationConfig(
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
  vpn_authentication_types: typing.List[str],
  azure_active_directory_authentication: typing.Union[IResolvable, typing.List[VpnServerConfigurationAzureActiveDirectoryAuthentication]] = None,
  client_revoked_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRevokedCertificate]] = None,
  client_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRootCertificate]] = None,
  id: str = None,
  ipsec_policy: VpnServerConfigurationIpsecPolicy = None,
  radius: VpnServerConfigurationRadius = None,
  tags: typing.Mapping[str] = None,
  timeouts: VpnServerConfigurationTimeouts = None,
  vpn_protocols: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnAuthenticationTypes">vpn_authentication_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.azureActiveDirectoryAuthentication">azure_active_directory_authentication</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]</code> | azure_active_directory_authentication block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRevokedCertificate">client_revoked_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]</code> | client_revoked_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRootCertificate">client_root_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.ipsecPolicy">ipsec_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | ipsec_policy block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.radius">radius</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | radius block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnProtocols">vpn_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#location VpnServerConfiguration#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#resource_group_name VpnServerConfiguration#resource_group_name}.

---

##### `vpn_authentication_types`<sup>Required</sup> <a name="vpn_authentication_types" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnAuthenticationTypes"></a>

```python
vpn_authentication_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_authentication_types VpnServerConfiguration#vpn_authentication_types}.

---

##### `azure_active_directory_authentication`<sup>Optional</sup> <a name="azure_active_directory_authentication" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.azureActiveDirectoryAuthentication"></a>

```python
azure_active_directory_authentication: typing.Union[IResolvable, typing.List[VpnServerConfigurationAzureActiveDirectoryAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]

azure_active_directory_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#azure_active_directory_authentication VpnServerConfiguration#azure_active_directory_authentication}

---

##### `client_revoked_certificate`<sup>Optional</sup> <a name="client_revoked_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRevokedCertificate"></a>

```python
client_revoked_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]

client_revoked_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#client_revoked_certificate VpnServerConfiguration#client_revoked_certificate}

---

##### `client_root_certificate`<sup>Optional</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.clientRootCertificate"></a>

```python
client_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#id VpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipsec_policy`<sup>Optional</sup> <a name="ipsec_policy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.ipsecPolicy"></a>

```python
ipsec_policy: VpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

ipsec_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_policy VpnServerConfiguration#ipsec_policy}

---

##### `radius`<sup>Optional</sup> <a name="radius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.radius"></a>

```python
radius: VpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

radius block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#radius VpnServerConfiguration#radius}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#tags VpnServerConfiguration#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.timeouts"></a>

```python
timeouts: VpnServerConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#timeouts VpnServerConfiguration#timeouts}

---

##### `vpn_protocols`<sup>Optional</sup> <a name="vpn_protocols" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationConfig.property.vpnProtocols"></a>

```python
vpn_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#vpn_protocols VpnServerConfiguration#vpn_protocols}.

---

### VpnServerConfigurationIpsecPolicy <a name="VpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationIpsecPolicy(
  dh_group: str,
  ike_encryption: str,
  ike_integrity: str,
  ipsec_encryption: str,
  ipsec_integrity: str,
  pfs_group: str,
  sa_data_size_kilobytes: typing.Union[int, float],
  sa_lifetime_seconds: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.dhGroup">dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeEncryption">ike_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeIntegrity">ike_integrity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecEncryption">ipsec_encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecIntegrity">ipsec_integrity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.pfsGroup">pfs_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saDataSizeKilobytes">sa_data_size_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saLifetimeSeconds">sa_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}. |

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#dh_group VpnServerConfiguration#dh_group}.

---

##### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeEncryption"></a>

```python
ike_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ike_encryption VpnServerConfiguration#ike_encryption}.

---

##### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ikeIntegrity"></a>

```python
ike_integrity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ike_integrity VpnServerConfiguration#ike_integrity}.

---

##### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecEncryption"></a>

```python
ipsec_encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_encryption VpnServerConfiguration#ipsec_encryption}.

---

##### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.ipsecIntegrity"></a>

```python
ipsec_integrity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#ipsec_integrity VpnServerConfiguration#ipsec_integrity}.

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#pfs_group VpnServerConfiguration#pfs_group}.

---

##### `sa_data_size_kilobytes`<sup>Required</sup> <a name="sa_data_size_kilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saDataSizeKilobytes"></a>

```python
sa_data_size_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#sa_data_size_kilobytes VpnServerConfiguration#sa_data_size_kilobytes}.

---

##### `sa_lifetime_seconds`<sup>Required</sup> <a name="sa_lifetime_seconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy.property.saLifetimeSeconds"></a>

```python
sa_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#sa_lifetime_seconds VpnServerConfiguration#sa_lifetime_seconds}.

---

### VpnServerConfigurationRadius <a name="VpnServerConfigurationRadius" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadius(
  client_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusClientRootCertificate]] = None,
  server: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServer]] = None,
  server_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServerRootCertificate]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.clientRootCertificate">client_root_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]</code> | client_root_certificate block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.server">server</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]</code> | server block. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.serverRootCertificate">server_root_certificate</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]</code> | server_root_certificate block. |

---

##### `client_root_certificate`<sup>Optional</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.clientRootCertificate"></a>

```python
client_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusClientRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]

client_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#client_root_certificate VpnServerConfiguration#client_root_certificate}

---

##### `server`<sup>Optional</sup> <a name="server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.server"></a>

```python
server: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]

server block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#server VpnServerConfiguration#server}

---

##### `server_root_certificate`<sup>Optional</sup> <a name="server_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius.property.serverRootCertificate"></a>

```python
server_root_certificate: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServerRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]

server_root_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#server_root_certificate VpnServerConfiguration#server_root_certificate}

---

### VpnServerConfigurationRadiusClientRootCertificate <a name="VpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate(
  name: str,
  thumbprint: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#thumbprint VpnServerConfiguration#thumbprint}.

---

### VpnServerConfigurationRadiusServer <a name="VpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusServer(
  address: str,
  score: typing.Union[int, float],
  secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.address">address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.score">score</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.address"></a>

```python
address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#address VpnServerConfiguration#address}.

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#score VpnServerConfiguration#score}.

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#secret VpnServerConfiguration#secret}.

---

### VpnServerConfigurationRadiusServerRootCertificate <a name="VpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate(
  name: str,
  public_cert_data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.publicCertData">public_cert_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#name VpnServerConfiguration#name}.

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#public_cert_data VpnServerConfiguration#public_cert_data}.

---

### VpnServerConfigurationTimeouts <a name="VpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#create VpnServerConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#delete VpnServerConfiguration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#read VpnServerConfiguration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/vpn_server_configuration#update VpnServerConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="VpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationAzureActiveDirectoryAuthentication]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>]]

---


### VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audienceInput">audience_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenantInput">tenant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">tenant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience_input`<sup>Optional</sup> <a name="audience_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audienceInput"></a>

```python
audience_input: str
```

- *Type:* str

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `tenant_input`<sup>Optional</sup> <a name="tenant_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenantInput"></a>

```python
tenant_input: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```python
tenant: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationAzureActiveDirectoryAuthentication, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationAzureActiveDirectoryAuthentication">VpnServerConfigurationAzureActiveDirectoryAuthentication</a>, cdktf.IResolvable]

---


### VpnServerConfigurationClientRevokedCertificateList <a name="VpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationClientRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRevokedCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>]]

---


### VpnServerConfigurationClientRevokedCertificateOutputReference <a name="VpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationClientRevokedCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRevokedCertificate">VpnServerConfigurationClientRevokedCertificate</a>, cdktf.IResolvable]

---


### VpnServerConfigurationClientRootCertificateList <a name="VpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationClientRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>]]

---


### VpnServerConfigurationClientRootCertificateOutputReference <a name="VpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertDataInput">public_cert_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">public_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_cert_data_input`<sup>Optional</sup> <a name="public_cert_data_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertDataInput"></a>

```python
public_cert_data_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationClientRootCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationClientRootCertificate">VpnServerConfigurationClientRootCertificate</a>, cdktf.IResolvable]

---


### VpnServerConfigurationIpsecPolicyOutputReference <a name="VpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroupInput">dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryptionInput">ike_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrityInput">ike_integrity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryptionInput">ipsec_encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrityInput">ipsec_integrity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroupInput">pfs_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytesInput">sa_data_size_kilobytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSecondsInput">sa_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">ike_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">ike_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">ipsec_encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">ipsec_integrity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">pfs_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">sa_data_size_kilobytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">sa_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_group_input`<sup>Optional</sup> <a name="dh_group_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroupInput"></a>

```python
dh_group_input: str
```

- *Type:* str

---

##### `ike_encryption_input`<sup>Optional</sup> <a name="ike_encryption_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryptionInput"></a>

```python
ike_encryption_input: str
```

- *Type:* str

---

##### `ike_integrity_input`<sup>Optional</sup> <a name="ike_integrity_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrityInput"></a>

```python
ike_integrity_input: str
```

- *Type:* str

---

##### `ipsec_encryption_input`<sup>Optional</sup> <a name="ipsec_encryption_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryptionInput"></a>

```python
ipsec_encryption_input: str
```

- *Type:* str

---

##### `ipsec_integrity_input`<sup>Optional</sup> <a name="ipsec_integrity_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrityInput"></a>

```python
ipsec_integrity_input: str
```

- *Type:* str

---

##### `pfs_group_input`<sup>Optional</sup> <a name="pfs_group_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroupInput"></a>

```python
pfs_group_input: str
```

- *Type:* str

---

##### `sa_data_size_kilobytes_input`<sup>Optional</sup> <a name="sa_data_size_kilobytes_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytesInput"></a>

```python
sa_data_size_kilobytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime_seconds_input`<sup>Optional</sup> <a name="sa_lifetime_seconds_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSecondsInput"></a>

```python
sa_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `ike_encryption`<sup>Required</sup> <a name="ike_encryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```python
ike_encryption: str
```

- *Type:* str

---

##### `ike_integrity`<sup>Required</sup> <a name="ike_integrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```python
ike_integrity: str
```

- *Type:* str

---

##### `ipsec_encryption`<sup>Required</sup> <a name="ipsec_encryption" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```python
ipsec_encryption: str
```

- *Type:* str

---

##### `ipsec_integrity`<sup>Required</sup> <a name="ipsec_integrity" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```python
ipsec_integrity: str
```

- *Type:* str

---

##### `pfs_group`<sup>Required</sup> <a name="pfs_group" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```python
pfs_group: str
```

- *Type:* str

---

##### `sa_data_size_kilobytes`<sup>Required</sup> <a name="sa_data_size_kilobytes" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```python
sa_data_size_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sa_lifetime_seconds`<sup>Required</sup> <a name="sa_lifetime_seconds" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```python
sa_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```python
internal_value: VpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationIpsecPolicy">VpnServerConfigurationIpsecPolicy</a>

---


### VpnServerConfigurationRadiusClientRootCertificateList <a name="VpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationRadiusClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusClientRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]

---


### VpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="VpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprintInput">thumbprint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `thumbprint_input`<sup>Optional</sup> <a name="thumbprint_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprintInput"></a>

```python
thumbprint_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationRadiusClientRootCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>, cdktf.IResolvable]

---


### VpnServerConfigurationRadiusOutputReference <a name="VpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate">put_client_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer">put_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate">put_server_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetClientRootCertificate">reset_client_root_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServer">reset_server</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServerRootCertificate">reset_server_root_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_root_certificate` <a name="put_client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate"></a>

```python
def put_client_root_certificate(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusClientRootCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putClientRootCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]

---

##### `put_server` <a name="put_server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer"></a>

```python
def put_server(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServer]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServer.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]

---

##### `put_server_root_certificate` <a name="put_server_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate"></a>

```python
def put_server_root_certificate(
  value: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServerRootCertificate]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.putServerRootCertificate.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]

---

##### `reset_client_root_certificate` <a name="reset_client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetClientRootCertificate"></a>

```python
def reset_client_root_certificate() -> None
```

##### `reset_server` <a name="reset_server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServer"></a>

```python
def reset_server() -> None
```

##### `reset_server_root_certificate` <a name="reset_server_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.resetServerRootCertificate"></a>

```python
def reset_server_root_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">client_root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList">VpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.server">server</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList">VpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">server_root_certificate</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList">VpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificateInput">client_root_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverInput">server_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificateInput">server_root_certificate_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_root_certificate`<sup>Required</sup> <a name="client_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```python
client_root_certificate: VpnServerConfigurationRadiusClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificateList">VpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.server"></a>

```python
server: VpnServerConfigurationRadiusServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList">VpnServerConfigurationRadiusServerList</a>

---

##### `server_root_certificate`<sup>Required</sup> <a name="server_root_certificate" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```python
server_root_certificate: VpnServerConfigurationRadiusServerRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList">VpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `client_root_certificate_input`<sup>Optional</sup> <a name="client_root_certificate_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.clientRootCertificateInput"></a>

```python
client_root_certificate_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusClientRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusClientRootCertificate">VpnServerConfigurationRadiusClientRootCertificate</a>]]

---

##### `server_input`<sup>Optional</sup> <a name="server_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverInput"></a>

```python
server_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]

---

##### `server_root_certificate_input`<sup>Optional</sup> <a name="server_root_certificate_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.serverRootCertificateInput"></a>

```python
server_root_certificate_input: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServerRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```python
internal_value: VpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadius">VpnServerConfigurationRadius</a>

---


### VpnServerConfigurationRadiusServerList <a name="VpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusServerList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationRadiusServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServer]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>]]

---


### VpnServerConfigurationRadiusServerOutputReference <a name="VpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.addressInput">address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.scoreInput">score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.score">score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_input`<sup>Optional</sup> <a name="address_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.addressInput"></a>

```python
address_input: str
```

- *Type:* str

---

##### `score_input`<sup>Optional</sup> <a name="score_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.scoreInput"></a>

```python
score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `score`<sup>Required</sup> <a name="score" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```python
score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationRadiusServer, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServer">VpnServerConfigurationRadiusServer</a>, cdktf.IResolvable]

---


### VpnServerConfigurationRadiusServerRootCertificateList <a name="VpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnServerConfigurationRadiusServerRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VpnServerConfigurationRadiusServerRootCertificate]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>]]

---


### VpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="VpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertDataInput">public_cert_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">public_cert_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `public_cert_data_input`<sup>Optional</sup> <a name="public_cert_data_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertDataInput"></a>

```python
public_cert_data_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `public_cert_data`<sup>Required</sup> <a name="public_cert_data" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```python
public_cert_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationRadiusServerRootCertificate, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationRadiusServerRootCertificate">VpnServerConfigurationRadiusServerRootCertificate</a>, cdktf.IResolvable]

---


### VpnServerConfigurationTimeoutsOutputReference <a name="VpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import vpn_server_configuration

vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[VpnServerConfigurationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.vpnServerConfiguration.VpnServerConfigurationTimeouts">VpnServerConfigurationTimeouts</a>, cdktf.IResolvable]

---



