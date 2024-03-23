# `marketplaceRoleAssignment` Submodule <a name="`marketplaceRoleAssignment` Submodule" id="@cdktf/provider-azurerm.marketplaceRoleAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceRoleAssignment <a name="MarketplaceRoleAssignment" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment azurerm_marketplace_role_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  principal_id: str,
  condition: str = None,
  condition_version: str = None,
  delegated_managed_identity_resource_id: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  role_definition_id: str = None,
  role_definition_name: str = None,
  skip_service_principal_aad_check: typing.Union[bool, IResolvable] = None,
  timeouts: MarketplaceRoleAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.conditionVersion">condition_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.delegatedManagedIdentityResourceId">delegated_managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionName">role_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.skipServicePrincipalAadCheck">skip_service_principal_aad_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.principalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.condition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}.

---

##### `condition_version`<sup>Optional</sup> <a name="condition_version" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.conditionVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}.

---

##### `delegated_managed_identity_resource_id`<sup>Optional</sup> <a name="delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.delegatedManagedIdentityResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}.

---

##### `role_definition_id`<sup>Optional</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}.

---

##### `role_definition_name`<sup>Optional</sup> <a name="role_definition_name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.roleDefinitionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}.

---

##### `skip_service_principal_aad_check`<sup>Optional</sup> <a name="skip_service_principal_aad_check" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.skipServicePrincipalAadCheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#timeouts MarketplaceRoleAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetConditionVersion">reset_condition_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDelegatedManagedIdentityResourceId">reset_delegated_managed_identity_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionId">reset_role_definition_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionName">reset_role_definition_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetSkipServicePrincipalAadCheck">reset_skip_service_principal_aad_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_condition_version` <a name="reset_condition_version" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetConditionVersion"></a>

```python
def reset_condition_version() -> None
```

##### `reset_delegated_managed_identity_resource_id` <a name="reset_delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDelegatedManagedIdentityResourceId"></a>

```python
def reset_delegated_managed_identity_resource_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_definition_id` <a name="reset_role_definition_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionId"></a>

```python
def reset_role_definition_id() -> None
```

##### `reset_role_definition_name` <a name="reset_role_definition_name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetRoleDefinitionName"></a>

```python
def reset_role_definition_name() -> None
```

##### `reset_skip_service_principal_aad_check` <a name="reset_skip_service_principal_aad_check" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetSkipServicePrincipalAadCheck"></a>

```python
def reset_skip_service_principal_aad_check() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MarketplaceRoleAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MarketplaceRoleAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MarketplaceRoleAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceRoleAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference">MarketplaceRoleAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersionInput">condition_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceIdInput">delegated_managed_identity_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionIdInput">role_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionNameInput">role_definition_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheckInput">skip_service_principal_aad_check_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersion">condition_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceId">delegated_managed_identity_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionName">role_definition_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheck">skip_service_principal_aad_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeouts"></a>

```python
timeouts: MarketplaceRoleAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference">MarketplaceRoleAssignmentTimeoutsOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `condition_version_input`<sup>Optional</sup> <a name="condition_version_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersionInput"></a>

```python
condition_version_input: str
```

- *Type:* str

---

##### `delegated_managed_identity_resource_id_input`<sup>Optional</sup> <a name="delegated_managed_identity_resource_id_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceIdInput"></a>

```python
delegated_managed_identity_resource_id_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `role_definition_id_input`<sup>Optional</sup> <a name="role_definition_id_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionIdInput"></a>

```python
role_definition_id_input: str
```

- *Type:* str

---

##### `role_definition_name_input`<sup>Optional</sup> <a name="role_definition_name_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionNameInput"></a>

```python
role_definition_name_input: str
```

- *Type:* str

---

##### `skip_service_principal_aad_check_input`<sup>Optional</sup> <a name="skip_service_principal_aad_check_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheckInput"></a>

```python
skip_service_principal_aad_check_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MarketplaceRoleAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `condition_version`<sup>Required</sup> <a name="condition_version" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.conditionVersion"></a>

```python
condition_version: str
```

- *Type:* str

---

##### `delegated_managed_identity_resource_id`<sup>Required</sup> <a name="delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.delegatedManagedIdentityResourceId"></a>

```python
delegated_managed_identity_resource_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `role_definition_id`<sup>Required</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

---

##### `role_definition_name`<sup>Required</sup> <a name="role_definition_name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.roleDefinitionName"></a>

```python
role_definition_name: str
```

- *Type:* str

---

##### `skip_service_principal_aad_check`<sup>Required</sup> <a name="skip_service_principal_aad_check" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.skipServicePrincipalAadCheck"></a>

```python
skip_service_principal_aad_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceRoleAssignmentConfig <a name="MarketplaceRoleAssignmentConfig" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  principal_id: str,
  condition: str = None,
  condition_version: str = None,
  delegated_managed_identity_resource_id: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  role_definition_id: str = None,
  role_definition_name: str = None,
  skip_service_principal_aad_check: typing.Union[bool, IResolvable] = None,
  timeouts: MarketplaceRoleAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.condition">condition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.conditionVersion">condition_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.delegatedManagedIdentityResourceId">delegated_managed_identity_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionId">role_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionName">role_definition_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.skipServicePrincipalAadCheck">skip_service_principal_aad_check</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#principal_id MarketplaceRoleAssignment#principal_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.condition"></a>

```python
condition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition MarketplaceRoleAssignment#condition}.

---

##### `condition_version`<sup>Optional</sup> <a name="condition_version" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.conditionVersion"></a>

```python
condition_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#condition_version MarketplaceRoleAssignment#condition_version}.

---

##### `delegated_managed_identity_resource_id`<sup>Optional</sup> <a name="delegated_managed_identity_resource_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.delegatedManagedIdentityResourceId"></a>

```python
delegated_managed_identity_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delegated_managed_identity_resource_id MarketplaceRoleAssignment#delegated_managed_identity_resource_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#description MarketplaceRoleAssignment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#id MarketplaceRoleAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#name MarketplaceRoleAssignment#name}.

---

##### `role_definition_id`<sup>Optional</sup> <a name="role_definition_id" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionId"></a>

```python
role_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_id MarketplaceRoleAssignment#role_definition_id}.

---

##### `role_definition_name`<sup>Optional</sup> <a name="role_definition_name" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.roleDefinitionName"></a>

```python
role_definition_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#role_definition_name MarketplaceRoleAssignment#role_definition_name}.

---

##### `skip_service_principal_aad_check`<sup>Optional</sup> <a name="skip_service_principal_aad_check" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.skipServicePrincipalAadCheck"></a>

```python
skip_service_principal_aad_check: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#skip_service_principal_aad_check MarketplaceRoleAssignment#skip_service_principal_aad_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentConfig.property.timeouts"></a>

```python
timeouts: MarketplaceRoleAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#timeouts MarketplaceRoleAssignment#timeouts}

---

### MarketplaceRoleAssignmentTimeouts <a name="MarketplaceRoleAssignmentTimeouts" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#create MarketplaceRoleAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#delete MarketplaceRoleAssignment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/marketplace_role_assignment#read MarketplaceRoleAssignment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplaceRoleAssignmentTimeoutsOutputReference <a name="MarketplaceRoleAssignmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import marketplace_role_assignment

marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MarketplaceRoleAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.marketplaceRoleAssignment.MarketplaceRoleAssignmentTimeouts">MarketplaceRoleAssignmentTimeouts</a>]

---



