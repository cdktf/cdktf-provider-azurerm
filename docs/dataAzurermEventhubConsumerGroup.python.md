# `dataAzurermEventhubConsumerGroup` Submodule <a name="`dataAzurermEventhubConsumerGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermEventhubConsumerGroup <a name="DataAzurermEventhubConsumerGroup" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group azurerm_eventhub_consumer_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_name: str,
  name: str,
  namespace_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermEventhubConsumerGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.eventhubName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.namespaceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#timeouts DataAzurermEventhubConsumerGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#read DataAzurermEventhubConsumerGroup#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermEventhubConsumerGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermEventhubConsumerGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermEventhubConsumerGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermEventhubConsumerGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermEventhubConsumerGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference">DataAzurermEventhubConsumerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.userMetadata">user_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubNameInput">eventhub_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubName">eventhub_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeouts"></a>

```python
timeouts: DataAzurermEventhubConsumerGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference">DataAzurermEventhubConsumerGroupTimeoutsOutputReference</a>

---

##### `user_metadata`<sup>Required</sup> <a name="user_metadata" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.userMetadata"></a>

```python
user_metadata: str
```

- *Type:* str

---

##### `eventhub_name_input`<sup>Optional</sup> <a name="eventhub_name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubNameInput"></a>

```python
eventhub_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermEventhubConsumerGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermEventhubConsumerGroupConfig <a name="DataAzurermEventhubConsumerGroupConfig" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_name: str,
  name: str,
  namespace_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermEventhubConsumerGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.eventhubName">eventhub_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_name`<sup>Required</sup> <a name="eventhub_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.eventhubName"></a>

```python
eventhub_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#eventhub_name DataAzurermEventhubConsumerGroup#eventhub_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#name DataAzurermEventhubConsumerGroup#name}.

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#namespace_name DataAzurermEventhubConsumerGroup#namespace_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#resource_group_name DataAzurermEventhubConsumerGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#id DataAzurermEventhubConsumerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupConfig.property.timeouts"></a>

```python
timeouts: DataAzurermEventhubConsumerGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#timeouts DataAzurermEventhubConsumerGroup#timeouts}

---

### DataAzurermEventhubConsumerGroupTimeouts <a name="DataAzurermEventhubConsumerGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#read DataAzurermEventhubConsumerGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/data-sources/eventhub_consumer_group#read DataAzurermEventhubConsumerGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermEventhubConsumerGroupTimeoutsOutputReference <a name="DataAzurermEventhubConsumerGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_eventhub_consumer_group

dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermEventhubConsumerGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermEventhubConsumerGroup.DataAzurermEventhubConsumerGroupTimeouts">DataAzurermEventhubConsumerGroupTimeouts</a>]

---



