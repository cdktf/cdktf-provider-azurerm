# `dataAzurermArcResourceBridgeAppliance` Submodule <a name="`dataAzurermArcResourceBridgeAppliance` Submodule" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermArcResourceBridgeAppliance <a name="DataAzurermArcResourceBridgeAppliance" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance azurerm_arc_resource_bridge_appliance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermArcResourceBridgeApplianceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#timeouts DataAzurermArcResourceBridgeAppliance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermArcResourceBridgeAppliance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermArcResourceBridgeAppliance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermArcResourceBridgeAppliance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermArcResourceBridgeAppliance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro">distro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider">infrastructure_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64">public_key_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `distro`<sup>Required</sup> <a name="distro" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.distro"></a>

```python
distro: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.identity"></a>

```python
identity: DataAzurermArcResourceBridgeApplianceIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList">DataAzurermArcResourceBridgeApplianceIdentityList</a>

---

##### `infrastructure_provider`<sup>Required</sup> <a name="infrastructure_provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.infrastructureProvider"></a>

```python
infrastructure_provider: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `public_key_base64`<sup>Required</sup> <a name="public_key_base64" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.publicKeyBase64"></a>

```python
public_key_base64: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeouts"></a>

```python
timeouts: DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference">DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermArcResourceBridgeApplianceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeAppliance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermArcResourceBridgeApplianceConfig <a name="DataAzurermArcResourceBridgeApplianceConfig" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermArcResourceBridgeApplianceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#name DataAzurermArcResourceBridgeAppliance#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#resource_group_name DataAzurermArcResourceBridgeAppliance#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#id DataAzurermArcResourceBridgeAppliance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceConfig.property.timeouts"></a>

```python
timeouts: DataAzurermArcResourceBridgeApplianceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#timeouts DataAzurermArcResourceBridgeAppliance#timeouts}

---

### DataAzurermArcResourceBridgeApplianceIdentity <a name="DataAzurermArcResourceBridgeApplianceIdentity" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity()
```


### DataAzurermArcResourceBridgeApplianceTimeouts <a name="DataAzurermArcResourceBridgeApplianceTimeouts" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/data-sources/arc_resource_bridge_appliance#read DataAzurermArcResourceBridgeAppliance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermArcResourceBridgeApplianceIdentityList <a name="DataAzurermArcResourceBridgeApplianceIdentityList" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermArcResourceBridgeApplianceIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermArcResourceBridgeApplianceIdentityOutputReference <a name="DataAzurermArcResourceBridgeApplianceIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentityOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermArcResourceBridgeApplianceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceIdentity">DataAzurermArcResourceBridgeApplianceIdentity</a>

---


### DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference <a name="DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_arc_resource_bridge_appliance

dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermArcResourceBridgeApplianceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermArcResourceBridgeAppliance.DataAzurermArcResourceBridgeApplianceTimeouts">DataAzurermArcResourceBridgeApplianceTimeouts</a>]

---



