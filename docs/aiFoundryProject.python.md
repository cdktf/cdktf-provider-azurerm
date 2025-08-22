# `aiFoundryProject` Submodule <a name="`aiFoundryProject` Submodule" id="@cdktf/provider-azurerm.aiFoundryProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiFoundryProject <a name="AiFoundryProject" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project azurerm_ai_foundry_project}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ai_services_hub_id: str,
  location: str,
  name: str,
  description: str = None,
  friendly_name: str = None,
  high_business_impact_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: AiFoundryProjectIdentity = None,
  primary_user_assigned_identity: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AiFoundryProjectTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.aiServicesHubId">ai_services_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#ai_services_hub_id AiFoundryProject#ai_services_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#location AiFoundryProject#location}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#name AiFoundryProject#name}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#description AiFoundryProject#description}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#friendly_name AiFoundryProject#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.highBusinessImpactEnabled">high_business_impact_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#high_business_impact_enabled AiFoundryProject#high_business_impact_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#id AiFoundryProject#id}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.primaryUserAssignedIdentity">primary_user_assigned_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#primary_user_assigned_identity AiFoundryProject#primary_user_assigned_identity}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#tags AiFoundryProject#tags}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ai_services_hub_id`<sup>Required</sup> <a name="ai_services_hub_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.aiServicesHubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#ai_services_hub_id AiFoundryProject#ai_services_hub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#location AiFoundryProject#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#name AiFoundryProject#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#description AiFoundryProject#description}.

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.friendlyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#friendly_name AiFoundryProject#friendly_name}.

---

##### `high_business_impact_enabled`<sup>Optional</sup> <a name="high_business_impact_enabled" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.highBusinessImpactEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#high_business_impact_enabled AiFoundryProject#high_business_impact_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#id AiFoundryProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#identity AiFoundryProject#identity}

---

##### `primary_user_assigned_identity`<sup>Optional</sup> <a name="primary_user_assigned_identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.primaryUserAssignedIdentity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#primary_user_assigned_identity AiFoundryProject#primary_user_assigned_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#tags AiFoundryProject#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#timeouts AiFoundryProject#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetFriendlyName">reset_friendly_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetHighBusinessImpactEnabled">reset_high_business_impact_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetPrimaryUserAssignedIdentity">reset_primary_user_assigned_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#type AiFoundryProject#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#identity_ids AiFoundryProject#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#create AiFoundryProject#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#delete AiFoundryProject#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#read AiFoundryProject#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#update AiFoundryProject#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_friendly_name` <a name="reset_friendly_name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetFriendlyName"></a>

```python
def reset_friendly_name() -> None
```

##### `reset_high_business_impact_enabled` <a name="reset_high_business_impact_enabled" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetHighBusinessImpactEnabled"></a>

```python
def reset_high_business_impact_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_primary_user_assigned_identity` <a name="reset_primary_user_assigned_identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetPrimaryUserAssignedIdentity"></a>

```python
def reset_primary_user_assigned_identity() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AiFoundryProject resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProject.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AiFoundryProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiFoundryProject to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiFoundryProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AiFoundryProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference">AiFoundryProjectIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference">AiFoundryProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.aiServicesHubIdInput">ai_services_hub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.friendlyNameInput">friendly_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.highBusinessImpactEnabledInput">high_business_impact_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.primaryUserAssignedIdentityInput">primary_user_assigned_identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.aiServicesHubId">ai_services_hub_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.friendlyName">friendly_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.highBusinessImpactEnabled">high_business_impact_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.primaryUserAssignedIdentity">primary_user_assigned_identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.identity"></a>

```python
identity: AiFoundryProjectIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference">AiFoundryProjectIdentityOutputReference</a>

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.timeouts"></a>

```python
timeouts: AiFoundryProjectTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference">AiFoundryProjectTimeoutsOutputReference</a>

---

##### `ai_services_hub_id_input`<sup>Optional</sup> <a name="ai_services_hub_id_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.aiServicesHubIdInput"></a>

```python
ai_services_hub_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `friendly_name_input`<sup>Optional</sup> <a name="friendly_name_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.friendlyNameInput"></a>

```python
friendly_name_input: str
```

- *Type:* str

---

##### `high_business_impact_enabled_input`<sup>Optional</sup> <a name="high_business_impact_enabled_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.highBusinessImpactEnabledInput"></a>

```python
high_business_impact_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.identityInput"></a>

```python
identity_input: AiFoundryProjectIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_user_assigned_identity_input`<sup>Optional</sup> <a name="primary_user_assigned_identity_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.primaryUserAssignedIdentityInput"></a>

```python
primary_user_assigned_identity_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AiFoundryProjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a>]

---

##### `ai_services_hub_id`<sup>Required</sup> <a name="ai_services_hub_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.aiServicesHubId"></a>

```python
ai_services_hub_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `friendly_name`<sup>Required</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

---

##### `high_business_impact_enabled`<sup>Required</sup> <a name="high_business_impact_enabled" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.highBusinessImpactEnabled"></a>

```python
high_business_impact_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_user_assigned_identity`<sup>Required</sup> <a name="primary_user_assigned_identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.primaryUserAssignedIdentity"></a>

```python
primary_user_assigned_identity: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiFoundryProjectConfig <a name="AiFoundryProjectConfig" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ai_services_hub_id: str,
  location: str,
  name: str,
  description: str = None,
  friendly_name: str = None,
  high_business_impact_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: AiFoundryProjectIdentity = None,
  primary_user_assigned_identity: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: AiFoundryProjectTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.aiServicesHubId">ai_services_hub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#ai_services_hub_id AiFoundryProject#ai_services_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#location AiFoundryProject#location}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#name AiFoundryProject#name}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#description AiFoundryProject#description}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.friendlyName">friendly_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#friendly_name AiFoundryProject#friendly_name}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.highBusinessImpactEnabled">high_business_impact_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#high_business_impact_enabled AiFoundryProject#high_business_impact_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#id AiFoundryProject#id}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.primaryUserAssignedIdentity">primary_user_assigned_identity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#primary_user_assigned_identity AiFoundryProject#primary_user_assigned_identity}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#tags AiFoundryProject#tags}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ai_services_hub_id`<sup>Required</sup> <a name="ai_services_hub_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.aiServicesHubId"></a>

```python
ai_services_hub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#ai_services_hub_id AiFoundryProject#ai_services_hub_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#location AiFoundryProject#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#name AiFoundryProject#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#description AiFoundryProject#description}.

---

##### `friendly_name`<sup>Optional</sup> <a name="friendly_name" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.friendlyName"></a>

```python
friendly_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#friendly_name AiFoundryProject#friendly_name}.

---

##### `high_business_impact_enabled`<sup>Optional</sup> <a name="high_business_impact_enabled" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.highBusinessImpactEnabled"></a>

```python
high_business_impact_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#high_business_impact_enabled AiFoundryProject#high_business_impact_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#id AiFoundryProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.identity"></a>

```python
identity: AiFoundryProjectIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#identity AiFoundryProject#identity}

---

##### `primary_user_assigned_identity`<sup>Optional</sup> <a name="primary_user_assigned_identity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.primaryUserAssignedIdentity"></a>

```python
primary_user_assigned_identity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#primary_user_assigned_identity AiFoundryProject#primary_user_assigned_identity}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#tags AiFoundryProject#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectConfig.property.timeouts"></a>

```python
timeouts: AiFoundryProjectTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#timeouts AiFoundryProject#timeouts}

---

### AiFoundryProjectIdentity <a name="AiFoundryProjectIdentity" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProjectIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#type AiFoundryProject#type}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#identity_ids AiFoundryProject#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#type AiFoundryProject#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#identity_ids AiFoundryProject#identity_ids}.

---

### AiFoundryProjectTimeouts <a name="AiFoundryProjectTimeouts" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProjectTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#create AiFoundryProject#create}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#delete AiFoundryProject#delete}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#read AiFoundryProject#read}. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#update AiFoundryProject#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#create AiFoundryProject#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#delete AiFoundryProject#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#read AiFoundryProject#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.41.0/docs/resources/ai_foundry_project#update AiFoundryProject#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiFoundryProjectIdentityOutputReference <a name="AiFoundryProjectIdentityOutputReference" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProjectIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentityOutputReference.property.internalValue"></a>

```python
internal_value: AiFoundryProjectIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectIdentity">AiFoundryProjectIdentity</a>

---


### AiFoundryProjectTimeoutsOutputReference <a name="AiFoundryProjectTimeoutsOutputReference" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import ai_foundry_project

aiFoundryProject.AiFoundryProjectTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AiFoundryProjectTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.aiFoundryProject.AiFoundryProjectTimeouts">AiFoundryProjectTimeouts</a>]

---



