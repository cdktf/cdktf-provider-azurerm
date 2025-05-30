# `subnetServiceEndpointStoragePolicy` Submodule <a name="`subnetServiceEndpointStoragePolicy` Submodule" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetServiceEndpointStoragePolicy <a name="SubnetServiceEndpointStoragePolicy" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy azurerm_subnet_service_endpoint_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy(
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
  definition: typing.Union[IResolvable, typing.List[SubnetServiceEndpointStoragePolicyDefinition]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SubnetServiceEndpointStoragePolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.definition">definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]</code> | definition block. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.definition"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#definition SubnetServiceEndpointStoragePolicy#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#timeouts SubnetServiceEndpointStoragePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition">put_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition">reset_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_definition` <a name="put_definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition"></a>

```python
def put_definition(
  value: typing.Union[IResolvable, typing.List[SubnetServiceEndpointStoragePolicyDefinition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}.

---

##### `reset_definition` <a name="reset_definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition"></a>

```python
def reset_definition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SubnetServiceEndpointStoragePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SubnetServiceEndpointStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubnetServiceEndpointStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput">definition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition"></a>

```python
definition: SubnetServiceEndpointStoragePolicyDefinitionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts"></a>

```python
timeouts: SubnetServiceEndpointStoragePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a>

---

##### `definition_input`<sup>Optional</sup> <a name="definition_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput"></a>

```python
definition_input: typing.Union[IResolvable, typing.List[SubnetServiceEndpointStoragePolicyDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SubnetServiceEndpointStoragePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetServiceEndpointStoragePolicyConfig <a name="SubnetServiceEndpointStoragePolicyConfig" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig(
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
  definition: typing.Union[IResolvable, typing.List[SubnetServiceEndpointStoragePolicyDefinition]] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: SubnetServiceEndpointStoragePolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition">definition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]</code> | definition block. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition"></a>

```python
definition: typing.Union[IResolvable, typing.List[SubnetServiceEndpointStoragePolicyDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#definition SubnetServiceEndpointStoragePolicy#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts"></a>

```python
timeouts: SubnetServiceEndpointStoragePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#timeouts SubnetServiceEndpointStoragePolicy#timeouts}

---

### SubnetServiceEndpointStoragePolicyDefinition <a name="SubnetServiceEndpointStoragePolicyDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition(
  name: str,
  service_resources: typing.List[str],
  description: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources">service_resources</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `service_resources`<sup>Required</sup> <a name="service_resources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources"></a>

```python
service_resources: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}.

---

### SubnetServiceEndpointStoragePolicyTimeouts <a name="SubnetServiceEndpointStoragePolicyTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetServiceEndpointStoragePolicyDefinitionList <a name="SubnetServiceEndpointStoragePolicyDefinitionList" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> SubnetServiceEndpointStoragePolicyDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[SubnetServiceEndpointStoragePolicyDefinition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]]

---


### SubnetServiceEndpointStoragePolicyDefinitionOutputReference <a name="SubnetServiceEndpointStoragePolicyDefinitionOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput">service_resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources">service_resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `service_resources_input`<sup>Optional</sup> <a name="service_resources_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput"></a>

```python
service_resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `service_resources`<sup>Required</sup> <a name="service_resources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources"></a>

```python
service_resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubnetServiceEndpointStoragePolicyDefinition]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>]

---


### SubnetServiceEndpointStoragePolicyTimeoutsOutputReference <a name="SubnetServiceEndpointStoragePolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import subnet_service_endpoint_storage_policy

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SubnetServiceEndpointStoragePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>]

---



