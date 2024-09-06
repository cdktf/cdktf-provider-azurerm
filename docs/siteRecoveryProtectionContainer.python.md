# `siteRecoveryProtectionContainer` Submodule <a name="`siteRecoveryProtectionContainer` Submodule" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryProtectionContainer <a name="SiteRecoveryProtectionContainer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container azurerm_site_recovery_protection_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer(
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
  recovery_fabric_name: str,
  recovery_vault_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: SiteRecoveryProtectionContainerTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#name SiteRecoveryProtectionContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.recoveryFabricName">recovery_fabric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_fabric_name SiteRecoveryProtectionContainer#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_vault_name SiteRecoveryProtectionContainer#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#resource_group_name SiteRecoveryProtectionContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#id SiteRecoveryProtectionContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#name SiteRecoveryProtectionContainer#name}.

---

##### `recovery_fabric_name`<sup>Required</sup> <a name="recovery_fabric_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.recoveryFabricName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_fabric_name SiteRecoveryProtectionContainer#recovery_fabric_name}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.recoveryVaultName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_vault_name SiteRecoveryProtectionContainer#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#resource_group_name SiteRecoveryProtectionContainer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#id SiteRecoveryProtectionContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#timeouts SiteRecoveryProtectionContainer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#create SiteRecoveryProtectionContainer#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#delete SiteRecoveryProtectionContainer#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#read SiteRecoveryProtectionContainer#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SiteRecoveryProtectionContainer resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SiteRecoveryProtectionContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SiteRecoveryProtectionContainer to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SiteRecoveryProtectionContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryProtectionContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference">SiteRecoveryProtectionContainerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryFabricNameInput">recovery_fabric_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryVaultNameInput">recovery_vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryFabricName">recovery_fabric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.timeouts"></a>

```python
timeouts: SiteRecoveryProtectionContainerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference">SiteRecoveryProtectionContainerTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_fabric_name_input`<sup>Optional</sup> <a name="recovery_fabric_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryFabricNameInput"></a>

```python
recovery_fabric_name_input: str
```

- *Type:* str

---

##### `recovery_vault_name_input`<sup>Optional</sup> <a name="recovery_vault_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryVaultNameInput"></a>

```python
recovery_vault_name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SiteRecoveryProtectionContainerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `recovery_fabric_name`<sup>Required</sup> <a name="recovery_fabric_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryFabricName"></a>

```python
recovery_fabric_name: str
```

- *Type:* str

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryProtectionContainerConfig <a name="SiteRecoveryProtectionContainerConfig" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  recovery_fabric_name: str,
  recovery_vault_name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: SiteRecoveryProtectionContainerTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#name SiteRecoveryProtectionContainer#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.recoveryFabricName">recovery_fabric_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_fabric_name SiteRecoveryProtectionContainer#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.recoveryVaultName">recovery_vault_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_vault_name SiteRecoveryProtectionContainer#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#resource_group_name SiteRecoveryProtectionContainer#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#id SiteRecoveryProtectionContainer#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#name SiteRecoveryProtectionContainer#name}.

---

##### `recovery_fabric_name`<sup>Required</sup> <a name="recovery_fabric_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.recoveryFabricName"></a>

```python
recovery_fabric_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_fabric_name SiteRecoveryProtectionContainer#recovery_fabric_name}.

---

##### `recovery_vault_name`<sup>Required</sup> <a name="recovery_vault_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.recoveryVaultName"></a>

```python
recovery_vault_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#recovery_vault_name SiteRecoveryProtectionContainer#recovery_vault_name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#resource_group_name SiteRecoveryProtectionContainer#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#id SiteRecoveryProtectionContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerConfig.property.timeouts"></a>

```python
timeouts: SiteRecoveryProtectionContainerTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#timeouts SiteRecoveryProtectionContainer#timeouts}

---

### SiteRecoveryProtectionContainerTimeouts <a name="SiteRecoveryProtectionContainerTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#create SiteRecoveryProtectionContainer#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#delete SiteRecoveryProtectionContainer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#read SiteRecoveryProtectionContainer#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#create SiteRecoveryProtectionContainer#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#delete SiteRecoveryProtectionContainer#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/site_recovery_protection_container#read SiteRecoveryProtectionContainer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryProtectionContainerTimeoutsOutputReference <a name="SiteRecoveryProtectionContainerTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import site_recovery_protection_container

siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SiteRecoveryProtectionContainerTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainer.SiteRecoveryProtectionContainerTimeouts">SiteRecoveryProtectionContainerTimeouts</a>]

---



