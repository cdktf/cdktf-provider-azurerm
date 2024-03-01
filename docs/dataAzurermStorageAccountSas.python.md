# `dataAzurermStorageAccountSas` Submodule <a name="`dataAzurermStorageAccountSas` Submodule" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStorageAccountSas <a name="DataAzurermStorageAccountSas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas azurerm_storage_account_sas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSas(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_string: str,
  expiry: str,
  permissions: DataAzurermStorageAccountSasPermissions,
  resource_types: DataAzurermStorageAccountSasResourceTypes,
  services: DataAzurermStorageAccountSasServices,
  start: str,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_addresses: str = None,
  signed_version: str = None,
  timeouts: DataAzurermStorageAccountSasTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.resourceTypes">resource_types</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | resource_types block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.services">services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | services block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.ipAddresses">ip_addresses</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.signedVersion">signed_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.connectionString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}.

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.expiry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.permissions"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#permissions DataAzurermStorageAccountSas#permissions}

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.resourceTypes"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

resource_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#resource_types DataAzurermStorageAccountSas#resource_types}

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.services"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#services DataAzurermStorageAccountSas#services}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.start"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.ipAddresses"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}.

---

##### `signed_version`<sup>Optional</sup> <a name="signed_version" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.signedVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#timeouts DataAzurermStorageAccountSas#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions">put_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes">put_resource_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices">put_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetSignedVersion">reset_signed_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_permissions` <a name="put_permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions"></a>

```python
def put_permissions(
  add: typing.Union[bool, IResolvable],
  create: typing.Union[bool, IResolvable],
  delete: typing.Union[bool, IResolvable],
  filter: typing.Union[bool, IResolvable],
  list: typing.Union[bool, IResolvable],
  process: typing.Union[bool, IResolvable],
  read: typing.Union[bool, IResolvable],
  tag: typing.Union[bool, IResolvable],
  update: typing.Union[bool, IResolvable],
  write: typing.Union[bool, IResolvable]
) -> None
```

###### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.add"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}.

---

###### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.create"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}.

---

###### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.delete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}.

---

###### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.filter"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}.

---

###### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.list"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}.

---

###### `process`<sup>Required</sup> <a name="process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.process"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}.

---

###### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.read"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

###### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.tag"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}.

---

###### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.update"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}.

---

###### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putPermissions.parameter.write"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}.

---

##### `put_resource_types` <a name="put_resource_types" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes"></a>

```python
def put_resource_types(
  container: typing.Union[bool, IResolvable],
  object: typing.Union[bool, IResolvable],
  service: typing.Union[bool, IResolvable]
) -> None
```

###### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes.parameter.container"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}.

---

###### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes.parameter.object"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}.

---

###### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putResourceTypes.parameter.service"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}.

---

##### `put_services` <a name="put_services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices"></a>

```python
def put_services(
  blob: typing.Union[bool, IResolvable],
  file: typing.Union[bool, IResolvable],
  queue: typing.Union[bool, IResolvable],
  table: typing.Union[bool, IResolvable]
) -> None
```

###### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices.parameter.blob"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}.

---

###### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices.parameter.file"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}.

---

###### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices.parameter.queue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}.

---

###### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putServices.parameter.table"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_signed_version` <a name="reset_signed_version" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetSignedVersion"></a>

```python
def reset_signed_version() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermStorageAccountSas resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermStorageAccountSas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermStorageAccountSas to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermStorageAccountSas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStorageAccountSas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference">DataAzurermStorageAccountSasPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypes">resource_types</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference">DataAzurermStorageAccountSasResourceTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.sas">sas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.services">services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference">DataAzurermStorageAccountSasServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference">DataAzurermStorageAccountSasTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionStringInput">connection_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiryInput">expiry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddressesInput">ip_addresses_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissionsInput">permissions_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypesInput">resource_types_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.servicesInput">services_input</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersionInput">signed_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.startInput">start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionString">connection_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiry">expiry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddresses">ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersion">signed_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.start">start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissions"></a>

```python
permissions: DataAzurermStorageAccountSasPermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference">DataAzurermStorageAccountSasPermissionsOutputReference</a>

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypes"></a>

```python
resource_types: DataAzurermStorageAccountSasResourceTypesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference">DataAzurermStorageAccountSasResourceTypesOutputReference</a>

---

##### `sas`<sup>Required</sup> <a name="sas" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.sas"></a>

```python
sas: str
```

- *Type:* str

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.services"></a>

```python
services: DataAzurermStorageAccountSasServicesOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference">DataAzurermStorageAccountSasServicesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeouts"></a>

```python
timeouts: DataAzurermStorageAccountSasTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference">DataAzurermStorageAccountSasTimeoutsOutputReference</a>

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionStringInput"></a>

```python
connection_string_input: str
```

- *Type:* str

---

##### `expiry_input`<sup>Optional</sup> <a name="expiry_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiryInput"></a>

```python
expiry_input: str
```

- *Type:* str

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddressesInput"></a>

```python
ip_addresses_input: str
```

- *Type:* str

---

##### `permissions_input`<sup>Optional</sup> <a name="permissions_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.permissionsInput"></a>

```python
permissions_input: DataAzurermStorageAccountSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---

##### `resource_types_input`<sup>Optional</sup> <a name="resource_types_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.resourceTypesInput"></a>

```python
resource_types_input: DataAzurermStorageAccountSasResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.servicesInput"></a>

```python
services_input: DataAzurermStorageAccountSasServices
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---

##### `signed_version_input`<sup>Optional</sup> <a name="signed_version_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersionInput"></a>

```python
signed_version_input: str
```

- *Type:* str

---

##### `start_input`<sup>Optional</sup> <a name="start_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.startInput"></a>

```python
start_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermStorageAccountSasTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.ipAddresses"></a>

```python
ip_addresses: str
```

- *Type:* str

---

##### `signed_version`<sup>Required</sup> <a name="signed_version" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.signedVersion"></a>

```python
signed_version: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.start"></a>

```python
start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSas.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStorageAccountSasConfig <a name="DataAzurermStorageAccountSasConfig" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_string: str,
  expiry: str,
  permissions: DataAzurermStorageAccountSasPermissions,
  resource_types: DataAzurermStorageAccountSasResourceTypes,
  services: DataAzurermStorageAccountSasServices,
  start: str,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_addresses: str = None,
  signed_version: str = None,
  timeouts: DataAzurermStorageAccountSasTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connectionString">connection_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.expiry">expiry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | permissions block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.resourceTypes">resource_types</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | resource_types block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.services">services</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | services block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.start">start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.ipAddresses">ip_addresses</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.signedVersion">signed_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.connectionString"></a>

```python
connection_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#connection_string DataAzurermStorageAccountSas#connection_string}.

---

##### `expiry`<sup>Required</sup> <a name="expiry" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.expiry"></a>

```python
expiry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#expiry DataAzurermStorageAccountSas#expiry}.

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.permissions"></a>

```python
permissions: DataAzurermStorageAccountSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#permissions DataAzurermStorageAccountSas#permissions}

---

##### `resource_types`<sup>Required</sup> <a name="resource_types" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.resourceTypes"></a>

```python
resource_types: DataAzurermStorageAccountSasResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

resource_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#resource_types DataAzurermStorageAccountSas#resource_types}

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.services"></a>

```python
services: DataAzurermStorageAccountSasServices
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#services DataAzurermStorageAccountSas#services}

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.start"></a>

```python
start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#start DataAzurermStorageAccountSas#start}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#https_only DataAzurermStorageAccountSas#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#id DataAzurermStorageAccountSas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.ipAddresses"></a>

```python
ip_addresses: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#ip_addresses DataAzurermStorageAccountSas#ip_addresses}.

---

##### `signed_version`<sup>Optional</sup> <a name="signed_version" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.signedVersion"></a>

```python
signed_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#signed_version DataAzurermStorageAccountSas#signed_version}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasConfig.property.timeouts"></a>

```python
timeouts: DataAzurermStorageAccountSasTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#timeouts DataAzurermStorageAccountSas#timeouts}

---

### DataAzurermStorageAccountSasPermissions <a name="DataAzurermStorageAccountSasPermissions" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions(
  add: typing.Union[bool, IResolvable],
  create: typing.Union[bool, IResolvable],
  delete: typing.Union[bool, IResolvable],
  filter: typing.Union[bool, IResolvable],
  list: typing.Union[bool, IResolvable],
  process: typing.Union[bool, IResolvable],
  read: typing.Union[bool, IResolvable],
  tag: typing.Union[bool, IResolvable],
  update: typing.Union[bool, IResolvable],
  write: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.add">add</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.create">create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.filter">filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.list">list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.process">process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.tag">tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.update">update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}. |

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.add"></a>

```python
add: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#add DataAzurermStorageAccountSas#add}.

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.create"></a>

```python
create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#create DataAzurermStorageAccountSas#create}.

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#delete DataAzurermStorageAccountSas#delete}.

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.filter"></a>

```python
filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#filter DataAzurermStorageAccountSas#filter}.

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.list"></a>

```python
list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#list DataAzurermStorageAccountSas#list}.

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.process"></a>

```python
process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#process DataAzurermStorageAccountSas#process}.

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.tag"></a>

```python
tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#tag DataAzurermStorageAccountSas#tag}.

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.update"></a>

```python
update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#update DataAzurermStorageAccountSas#update}.

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#write DataAzurermStorageAccountSas#write}.

---

### DataAzurermStorageAccountSasResourceTypes <a name="DataAzurermStorageAccountSasResourceTypes" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes(
  container: typing.Union[bool, IResolvable],
  object: typing.Union[bool, IResolvable],
  service: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.container">container</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.object">object</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.service">service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.container"></a>

```python
container: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#container DataAzurermStorageAccountSas#container}.

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.object"></a>

```python
object: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#object DataAzurermStorageAccountSas#object}.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes.property.service"></a>

```python
service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#service DataAzurermStorageAccountSas#service}.

---

### DataAzurermStorageAccountSasServices <a name="DataAzurermStorageAccountSasServices" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices(
  blob: typing.Union[bool, IResolvable],
  file: typing.Union[bool, IResolvable],
  queue: typing.Union[bool, IResolvable],
  table: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.blob">blob</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.file">file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.queue">queue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.table">table</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}. |

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.blob"></a>

```python
blob: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#blob DataAzurermStorageAccountSas#blob}.

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.file"></a>

```python
file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#file DataAzurermStorageAccountSas#file}.

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.queue"></a>

```python
queue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#queue DataAzurermStorageAccountSas#queue}.

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices.property.table"></a>

```python
table: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#table DataAzurermStorageAccountSas#table}.

---

### DataAzurermStorageAccountSasTimeouts <a name="DataAzurermStorageAccountSasTimeouts" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/data-sources/storage_account_sas#read DataAzurermStorageAccountSas#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStorageAccountSasPermissionsOutputReference <a name="DataAzurermStorageAccountSasPermissionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.addInput">add_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.createInput">create_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.deleteInput">delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filterInput">filter_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.listInput">list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.processInput">process_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.readInput">read_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tagInput">tag_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.updateInput">update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.writeInput">write_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.add">add</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.create">create</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.delete">delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filter">filter</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.list">list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.process">process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.read">read</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tag">tag</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.update">update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.write">write</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `add_input`<sup>Optional</sup> <a name="add_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.addInput"></a>

```python
add_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.createInput"></a>

```python
create_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.deleteInput"></a>

```python
delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filterInput"></a>

```python
filter_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `list_input`<sup>Optional</sup> <a name="list_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.listInput"></a>

```python
list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `process_input`<sup>Optional</sup> <a name="process_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.processInput"></a>

```python
process_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.readInput"></a>

```python
read_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_input`<sup>Optional</sup> <a name="tag_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tagInput"></a>

```python
tag_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.updateInput"></a>

```python
update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write_input`<sup>Optional</sup> <a name="write_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.writeInput"></a>

```python
write_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `add`<sup>Required</sup> <a name="add" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.add"></a>

```python
add: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.create"></a>

```python
create: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.delete"></a>

```python
delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.filter"></a>

```python
filter: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `list`<sup>Required</sup> <a name="list" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.list"></a>

```python
list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `process`<sup>Required</sup> <a name="process" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.process"></a>

```python
process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.read"></a>

```python
read: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.tag"></a>

```python
tag: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.update"></a>

```python
update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `write`<sup>Required</sup> <a name="write" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.write"></a>

```python
write: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageAccountSasPermissions
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasPermissions">DataAzurermStorageAccountSasPermissions</a>

---


### DataAzurermStorageAccountSasResourceTypesOutputReference <a name="DataAzurermStorageAccountSasResourceTypesOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.containerInput">container_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.objectInput">object_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.serviceInput">service_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.container">container</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.object">object</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.service">service</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.containerInput"></a>

```python
container_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.objectInput"></a>

```python
object_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.serviceInput"></a>

```python
service_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.container"></a>

```python
container: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.object"></a>

```python
object: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.service"></a>

```python
service: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageAccountSasResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasResourceTypes">DataAzurermStorageAccountSasResourceTypes</a>

---


### DataAzurermStorageAccountSasServicesOutputReference <a name="DataAzurermStorageAccountSasServicesOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blobInput">blob_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fileInput">file_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queueInput">queue_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.tableInput">table_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blob">blob</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.file">file</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queue">queue</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.table">table</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `blob_input`<sup>Optional</sup> <a name="blob_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blobInput"></a>

```python
blob_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.fileInput"></a>

```python
file_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `queue_input`<sup>Optional</sup> <a name="queue_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queueInput"></a>

```python
queue_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.tableInput"></a>

```python
table_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blob`<sup>Required</sup> <a name="blob" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.blob"></a>

```python
blob: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.file"></a>

```python
file: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `queue`<sup>Required</sup> <a name="queue" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.queue"></a>

```python
queue: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.table"></a>

```python
table: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServicesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermStorageAccountSasServices
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasServices">DataAzurermStorageAccountSasServices</a>

---


### DataAzurermStorageAccountSasTimeoutsOutputReference <a name="DataAzurermStorageAccountSasTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_storage_account_sas

dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermStorageAccountSasTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermStorageAccountSas.DataAzurermStorageAccountSasTimeouts">DataAzurermStorageAccountSasTimeouts</a>]

---



