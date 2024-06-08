# `dataAzurermNetappVolumeGroupSapHana` Submodule <a name="`dataAzurermNetappVolumeGroupSapHana` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappVolumeGroupSapHana <a name="DataAzurermNetappVolumeGroupSapHana" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana azurerm_netapp_volume_group_sap_hana}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermNetappVolumeGroupSapHanaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#account_name DataAzurermNetappVolumeGroupSapHana#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#name DataAzurermNetappVolumeGroupSapHana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#resource_group_name DataAzurermNetappVolumeGroupSapHana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#id DataAzurermNetappVolumeGroupSapHana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.accountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#account_name DataAzurermNetappVolumeGroupSapHana#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#name DataAzurermNetappVolumeGroupSapHana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#resource_group_name DataAzurermNetappVolumeGroupSapHana#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#id DataAzurermNetappVolumeGroupSapHana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#timeouts DataAzurermNetappVolumeGroupSapHana#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#read DataAzurermNetappVolumeGroupSapHana#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermNetappVolumeGroupSapHana resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermNetappVolumeGroupSapHana resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermNetappVolumeGroupSapHana to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermNetappVolumeGroupSapHana that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappVolumeGroupSapHana to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.applicationIdentifier">application_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.groupDescription">group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference">DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList">DataAzurermNetappVolumeGroupSapHanaVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `application_identifier`<sup>Required</sup> <a name="application_identifier" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.applicationIdentifier"></a>

```python
application_identifier: str
```

- *Type:* str

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeouts"></a>

```python
timeouts: DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference">DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.volume"></a>

```python
volume: DataAzurermNetappVolumeGroupSapHanaVolumeList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList">DataAzurermNetappVolumeGroupSapHanaVolumeList</a>

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermNetappVolumeGroupSapHanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHana.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappVolumeGroupSapHanaConfig <a name="DataAzurermNetappVolumeGroupSapHanaConfig" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  account_name: str,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermNetappVolumeGroupSapHanaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#account_name DataAzurermNetappVolumeGroupSapHana#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#name DataAzurermNetappVolumeGroupSapHana#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#resource_group_name DataAzurermNetappVolumeGroupSapHana#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#id DataAzurermNetappVolumeGroupSapHana#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#account_name DataAzurermNetappVolumeGroupSapHana#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#name DataAzurermNetappVolumeGroupSapHana#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#resource_group_name DataAzurermNetappVolumeGroupSapHana#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#id DataAzurermNetappVolumeGroupSapHana#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaConfig.property.timeouts"></a>

```python
timeouts: DataAzurermNetappVolumeGroupSapHanaTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#timeouts DataAzurermNetappVolumeGroupSapHana#timeouts}

---

### DataAzurermNetappVolumeGroupSapHanaTimeouts <a name="DataAzurermNetappVolumeGroupSapHanaTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#read DataAzurermNetappVolumeGroupSapHana#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/data-sources/netapp_volume_group_sap_hana#read DataAzurermNetappVolumeGroupSapHana#read}.

---

### DataAzurermNetappVolumeGroupSapHanaVolume <a name="DataAzurermNetappVolumeGroupSapHanaVolume" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume()
```


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication()
```


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy()
```


### DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule <a name="DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermNetappVolumeGroupSapHanaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaTimeouts">DataAzurermNetappVolumeGroupSapHanaTimeouts</a>]

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointType">endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation">remote_volume_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId">remote_volume_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequency">replication_frequency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_type`<sup>Required</sup> <a name="endpoint_type" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.endpointType"></a>

```python
endpoint_type: str
```

- *Type:* str

---

##### `remote_volume_location`<sup>Required</sup> <a name="remote_volume_location" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeLocation"></a>

```python
remote_volume_location: str
```

- *Type:* str

---

##### `remote_volume_resource_id`<sup>Required</sup> <a name="remote_volume_resource_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.remoteVolumeResourceId"></a>

```python
remote_volume_resource_id: str
```

- *Type:* str

---

##### `replication_frequency`<sup>Required</sup> <a name="replication_frequency" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.replicationFrequency"></a>

```python
replication_frequency: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplication</a>

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId">snapshot_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snapshot_policy_id`<sup>Required</sup> <a name="snapshot_policy_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.snapshotPolicyId"></a>

```python
snapshot_policy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicy</a>

---


### DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClients">allowed_clients</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled">nfsv3_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled">nfsv41_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled">root_access_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndex">rule_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnly">unix_read_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWrite">unix_read_write</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_clients`<sup>Required</sup> <a name="allowed_clients" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.allowedClients"></a>

```python
allowed_clients: str
```

- *Type:* str

---

##### `nfsv3_enabled`<sup>Required</sup> <a name="nfsv3_enabled" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv3Enabled"></a>

```python
nfsv3_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `nfsv41_enabled`<sup>Required</sup> <a name="nfsv41_enabled" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.nfsv41Enabled"></a>

```python
nfsv41_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `root_access_enabled`<sup>Required</sup> <a name="root_access_enabled" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.rootAccessEnabled"></a>

```python
root_access_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `rule_index`<sup>Required</sup> <a name="rule_index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.ruleIndex"></a>

```python
rule_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unix_read_only`<sup>Required</sup> <a name="unix_read_only" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadOnly"></a>

```python
unix_read_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `unix_read_write`<sup>Required</sup> <a name="unix_read_write" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.unixReadWrite"></a>

```python
unix_read_write: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRule</a>

---


### DataAzurermNetappVolumeGroupSapHanaVolumeList <a name="DataAzurermNetappVolumeGroupSapHanaVolumeList" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference <a name="DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_netapp_volume_group_sap_hana

dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolId">capacity_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplication">data_protection_replication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicy">data_protection_snapshot_policy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRule">export_policy_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.mountIpAddresses">mount_ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupId">proximity_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyle">security_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevel">service_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisible">snapshot_directory_visible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGb">storage_quota_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibps">throughput_in_mibps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumePath">volume_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecName">volume_spec_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume">DataAzurermNetappVolumeGroupSapHanaVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_pool_id`<sup>Required</sup> <a name="capacity_pool_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.capacityPoolId"></a>

```python
capacity_pool_id: str
```

- *Type:* str

---

##### `data_protection_replication`<sup>Required</sup> <a name="data_protection_replication" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionReplication"></a>

```python
data_protection_replication: DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionReplicationList</a>

---

##### `data_protection_snapshot_policy`<sup>Required</sup> <a name="data_protection_snapshot_policy" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.dataProtectionSnapshotPolicy"></a>

```python
data_protection_snapshot_policy: DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList">DataAzurermNetappVolumeGroupSapHanaVolumeDataProtectionSnapshotPolicyList</a>

---

##### `export_policy_rule`<sup>Required</sup> <a name="export_policy_rule" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.exportPolicyRule"></a>

```python
export_policy_rule: DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList">DataAzurermNetappVolumeGroupSapHanaVolumeExportPolicyRuleList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mount_ip_addresses`<sup>Required</sup> <a name="mount_ip_addresses" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.mountIpAddresses"></a>

```python
mount_ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `proximity_placement_group_id`<sup>Required</sup> <a name="proximity_placement_group_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.proximityPlacementGroupId"></a>

```python
proximity_placement_group_id: str
```

- *Type:* str

---

##### `security_style`<sup>Required</sup> <a name="security_style" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.securityStyle"></a>

```python
security_style: str
```

- *Type:* str

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

---

##### `snapshot_directory_visible`<sup>Required</sup> <a name="snapshot_directory_visible" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.snapshotDirectoryVisible"></a>

```python
snapshot_directory_visible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `storage_quota_in_gb`<sup>Required</sup> <a name="storage_quota_in_gb" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.storageQuotaInGb"></a>

```python
storage_quota_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `throughput_in_mibps`<sup>Required</sup> <a name="throughput_in_mibps" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.throughputInMibps"></a>

```python
throughput_in_mibps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_path`<sup>Required</sup> <a name="volume_path" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumePath"></a>

```python
volume_path: str
```

- *Type:* str

---

##### `volume_spec_name`<sup>Required</sup> <a name="volume_spec_name" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.volumeSpecName"></a>

```python
volume_spec_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolumeOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermNetappVolumeGroupSapHanaVolume
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappVolumeGroupSapHana.DataAzurermNetappVolumeGroupSapHanaVolume">DataAzurermNetappVolumeGroupSapHanaVolume</a>

---



