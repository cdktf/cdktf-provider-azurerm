# `azurerm_eventhub_namespace_schema_group`

Refer to the Terraform Registory for docs: [`azurerm_eventhub_namespace_schema_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group).

# `eventhubNamespaceSchemaGroup` Submodule <a name="`eventhubNamespaceSchemaGroup` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceSchemaGroup <a name="EventhubNamespaceSchemaGroup" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group azurerm_eventhub_namespace_schema_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup(
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
  namespace_id: str,
  schema_compatibility: str,
  schema_type: str,
  id: str = None,
  timeouts: EventhubNamespaceSchemaGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaCompatibility">schema_compatibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaType">schema_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}.

---

##### `schema_compatibility`<sup>Required</sup> <a name="schema_compatibility" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaCompatibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}.

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.schemaType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#timeouts EventhubNamespaceSchemaGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#create EventhubNamespaceSchemaGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#delete EventhubNamespaceSchemaGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#read EventhubNamespaceSchemaGroup#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference">EventhubNamespaceSchemaGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibilityInput">schema_compatibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaTypeInput">schema_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibility">schema_compatibility</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaType">schema_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeouts"></a>

```python
timeouts: EventhubNamespaceSchemaGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference">EventhubNamespaceSchemaGroupTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `schema_compatibility_input`<sup>Optional</sup> <a name="schema_compatibility_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibilityInput"></a>

```python
schema_compatibility_input: str
```

- *Type:* str

---

##### `schema_type_input`<sup>Optional</sup> <a name="schema_type_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaTypeInput"></a>

```python
schema_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventhubNamespaceSchemaGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `schema_compatibility`<sup>Required</sup> <a name="schema_compatibility" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaCompatibility"></a>

```python
schema_compatibility: str
```

- *Type:* str

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceSchemaGroupConfig <a name="EventhubNamespaceSchemaGroupConfig" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  namespace_id: str,
  schema_compatibility: str,
  schema_type: str,
  id: str = None,
  timeouts: EventhubNamespaceSchemaGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaCompatibility">schema_compatibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaType">schema_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#name EventhubNamespaceSchemaGroup#name}.

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#namespace_id EventhubNamespaceSchemaGroup#namespace_id}.

---

##### `schema_compatibility`<sup>Required</sup> <a name="schema_compatibility" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaCompatibility"></a>

```python
schema_compatibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_compatibility EventhubNamespaceSchemaGroup#schema_compatibility}.

---

##### `schema_type`<sup>Required</sup> <a name="schema_type" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.schemaType"></a>

```python
schema_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#schema_type EventhubNamespaceSchemaGroup#schema_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#id EventhubNamespaceSchemaGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupConfig.property.timeouts"></a>

```python
timeouts: EventhubNamespaceSchemaGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#timeouts EventhubNamespaceSchemaGroup#timeouts}

---

### EventhubNamespaceSchemaGroupTimeouts <a name="EventhubNamespaceSchemaGroupTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#create EventhubNamespaceSchemaGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#delete EventhubNamespaceSchemaGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#read EventhubNamespaceSchemaGroup#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#create EventhubNamespaceSchemaGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#delete EventhubNamespaceSchemaGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/eventhub_namespace_schema_group#read EventhubNamespaceSchemaGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceSchemaGroupTimeoutsOutputReference <a name="EventhubNamespaceSchemaGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_schema_group

eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventhubNamespaceSchemaGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceSchemaGroup.EventhubNamespaceSchemaGroupTimeouts">EventhubNamespaceSchemaGroupTimeouts</a>]

---



