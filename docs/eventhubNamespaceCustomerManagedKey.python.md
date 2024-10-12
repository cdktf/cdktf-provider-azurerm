# `eventhubNamespaceCustomerManagedKey` Submodule <a name="`eventhubNamespaceCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventhubNamespaceCustomerManagedKey <a name="EventhubNamespaceCustomerManagedKey" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key azurerm_eventhub_namespace_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_namespace_id: str,
  key_vault_key_ids: typing.List[str],
  id: str = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: EventhubNamespaceCustomerManagedKeyTimeouts = None,
  user_assigned_identity_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.eventhubNamespaceId">eventhub_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.keyVaultKeyIds">key_vault_key_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#infrastructure_encryption_enabled EventhubNamespaceCustomerManagedKey#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#user_assigned_identity_id EventhubNamespaceCustomerManagedKey#user_assigned_identity_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_namespace_id`<sup>Required</sup> <a name="eventhub_namespace_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.eventhubNamespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}.

---

##### `key_vault_key_ids`<sup>Required</sup> <a name="key_vault_key_ids" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.keyVaultKeyIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.infrastructureEncryptionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#infrastructure_encryption_enabled EventhubNamespaceCustomerManagedKey#infrastructure_encryption_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#timeouts EventhubNamespaceCustomerManagedKey#timeouts}

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.Initializer.parameter.userAssignedIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#user_assigned_identity_id EventhubNamespaceCustomerManagedKey#user_assigned_identity_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetInfrastructureEncryptionEnabled">reset_infrastructure_encryption_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetUserAssignedIdentityId">reset_user_assigned_identity_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#create EventhubNamespaceCustomerManagedKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#delete EventhubNamespaceCustomerManagedKey#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#read EventhubNamespaceCustomerManagedKey#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#update EventhubNamespaceCustomerManagedKey#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_infrastructure_encryption_enabled` <a name="reset_infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetInfrastructureEncryptionEnabled"></a>

```python
def reset_infrastructure_encryption_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_assigned_identity_id` <a name="reset_user_assigned_identity_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.resetUserAssignedIdentityId"></a>

```python
def reset_user_assigned_identity_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EventhubNamespaceCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EventhubNamespaceCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EventhubNamespaceCustomerManagedKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EventhubNamespaceCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventhubNamespaceCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference">EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceIdInput">eventhub_namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabledInput">infrastructure_encryption_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIdsInput">key_vault_key_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.userAssignedIdentityIdInput">user_assigned_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceId">eventhub_namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIds">key_vault_key_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeouts"></a>

```python
timeouts: EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference">EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `eventhub_namespace_id_input`<sup>Optional</sup> <a name="eventhub_namespace_id_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceIdInput"></a>

```python
eventhub_namespace_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled_input`<sup>Optional</sup> <a name="infrastructure_encryption_enabled_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabledInput"></a>

```python
infrastructure_encryption_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_ids_input`<sup>Optional</sup> <a name="key_vault_key_ids_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIdsInput"></a>

```python
key_vault_key_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EventhubNamespaceCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>]

---

##### `user_assigned_identity_id_input`<sup>Optional</sup> <a name="user_assigned_identity_id_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.userAssignedIdentityIdInput"></a>

```python
user_assigned_identity_id_input: str
```

- *Type:* str

---

##### `eventhub_namespace_id`<sup>Required</sup> <a name="eventhub_namespace_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.eventhubNamespaceId"></a>

```python
eventhub_namespace_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `infrastructure_encryption_enabled`<sup>Required</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_vault_key_ids`<sup>Required</sup> <a name="key_vault_key_ids" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.keyVaultKeyIds"></a>

```python
key_vault_key_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_assigned_identity_id`<sup>Required</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EventhubNamespaceCustomerManagedKeyConfig <a name="EventhubNamespaceCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  eventhub_namespace_id: str,
  key_vault_key_ids: typing.List[str],
  id: str = None,
  infrastructure_encryption_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: EventhubNamespaceCustomerManagedKeyTimeouts = None,
  user_assigned_identity_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.eventhubNamespaceId">eventhub_namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.keyVaultKeyIds">key_vault_key_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.infrastructureEncryptionEnabled">infrastructure_encryption_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#infrastructure_encryption_enabled EventhubNamespaceCustomerManagedKey#infrastructure_encryption_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.userAssignedIdentityId">user_assigned_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#user_assigned_identity_id EventhubNamespaceCustomerManagedKey#user_assigned_identity_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `eventhub_namespace_id`<sup>Required</sup> <a name="eventhub_namespace_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.eventhubNamespaceId"></a>

```python
eventhub_namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#eventhub_namespace_id EventhubNamespaceCustomerManagedKey#eventhub_namespace_id}.

---

##### `key_vault_key_ids`<sup>Required</sup> <a name="key_vault_key_ids" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.keyVaultKeyIds"></a>

```python
key_vault_key_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#key_vault_key_ids EventhubNamespaceCustomerManagedKey#key_vault_key_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#id EventhubNamespaceCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `infrastructure_encryption_enabled`<sup>Optional</sup> <a name="infrastructure_encryption_enabled" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.infrastructureEncryptionEnabled"></a>

```python
infrastructure_encryption_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#infrastructure_encryption_enabled EventhubNamespaceCustomerManagedKey#infrastructure_encryption_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.timeouts"></a>

```python
timeouts: EventhubNamespaceCustomerManagedKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#timeouts EventhubNamespaceCustomerManagedKey#timeouts}

---

##### `user_assigned_identity_id`<sup>Optional</sup> <a name="user_assigned_identity_id" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyConfig.property.userAssignedIdentityId"></a>

```python
user_assigned_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#user_assigned_identity_id EventhubNamespaceCustomerManagedKey#user_assigned_identity_id}.

---

### EventhubNamespaceCustomerManagedKeyTimeouts <a name="EventhubNamespaceCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#create EventhubNamespaceCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#delete EventhubNamespaceCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#read EventhubNamespaceCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#update EventhubNamespaceCustomerManagedKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#create EventhubNamespaceCustomerManagedKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#delete EventhubNamespaceCustomerManagedKey#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#read EventhubNamespaceCustomerManagedKey#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.5.0/docs/resources/eventhub_namespace_customer_managed_key#update EventhubNamespaceCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference <a name="EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import eventhub_namespace_customer_managed_key

eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EventhubNamespaceCustomerManagedKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.eventhubNamespaceCustomerManagedKey.EventhubNamespaceCustomerManagedKeyTimeouts">EventhubNamespaceCustomerManagedKeyTimeouts</a>]

---



