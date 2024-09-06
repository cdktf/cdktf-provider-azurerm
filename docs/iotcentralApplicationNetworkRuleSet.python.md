# `iotcentralApplicationNetworkRuleSet` Submodule <a name="`iotcentralApplicationNetworkRuleSet` Submodule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotcentralApplicationNetworkRuleSet <a name="IotcentralApplicationNetworkRuleSet" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set azurerm_iotcentral_application_network_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iotcentral_application_id: str,
  apply_to_device: typing.Union[bool, IResolvable] = None,
  default_action: str = None,
  id: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[IotcentralApplicationNetworkRuleSetIpRule]] = None,
  timeouts: IotcentralApplicationNetworkRuleSetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.iotcentralApplicationId">iotcentral_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.applyToDevice">apply_to_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.ipRule">ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]</code> | ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iotcentral_application_id`<sup>Required</sup> <a name="iotcentral_application_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.iotcentralApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}.

---

##### `apply_to_device`<sup>Optional</sup> <a name="apply_to_device" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.applyToDevice"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.ipRule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#ip_rule IotcentralApplicationNetworkRuleSet#ip_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#timeouts IotcentralApplicationNetworkRuleSet#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule">put_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetApplyToDevice">reset_apply_to_device</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetIpRule">reset_ip_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ip_rule` <a name="put_ip_rule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule"></a>

```python
def put_ip_rule(
  value: typing.Union[IResolvable, typing.List[IotcentralApplicationNetworkRuleSetIpRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putIpRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}.

---

##### `reset_apply_to_device` <a name="reset_apply_to_device" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetApplyToDevice"></a>

```python
def reset_apply_to_device() -> None
```

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_rule` <a name="reset_ip_rule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetIpRule"></a>

```python
def reset_ip_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IotcentralApplicationNetworkRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IotcentralApplicationNetworkRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IotcentralApplicationNetworkRuleSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IotcentralApplicationNetworkRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotcentralApplicationNetworkRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRule">ip_rule</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList">IotcentralApplicationNetworkRuleSetIpRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference">IotcentralApplicationNetworkRuleSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDeviceInput">apply_to_device_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationIdInput">iotcentral_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRuleInput">ip_rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDevice">apply_to_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationId">iotcentral_application_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_rule`<sup>Required</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRule"></a>

```python
ip_rule: IotcentralApplicationNetworkRuleSetIpRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList">IotcentralApplicationNetworkRuleSetIpRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeouts"></a>

```python
timeouts: IotcentralApplicationNetworkRuleSetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference">IotcentralApplicationNetworkRuleSetTimeoutsOutputReference</a>

---

##### `apply_to_device_input`<sup>Optional</sup> <a name="apply_to_device_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDeviceInput"></a>

```python
apply_to_device_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iotcentral_application_id_input`<sup>Optional</sup> <a name="iotcentral_application_id_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationIdInput"></a>

```python
iotcentral_application_id_input: str
```

- *Type:* str

---

##### `ip_rule_input`<sup>Optional</sup> <a name="ip_rule_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.ipRuleInput"></a>

```python
ip_rule_input: typing.Union[IResolvable, typing.List[IotcentralApplicationNetworkRuleSetIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IotcentralApplicationNetworkRuleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>]

---

##### `apply_to_device`<sup>Required</sup> <a name="apply_to_device" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.applyToDevice"></a>

```python
apply_to_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `iotcentral_application_id`<sup>Required</sup> <a name="iotcentral_application_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.iotcentralApplicationId"></a>

```python
iotcentral_application_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IotcentralApplicationNetworkRuleSetConfig <a name="IotcentralApplicationNetworkRuleSetConfig" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iotcentral_application_id: str,
  apply_to_device: typing.Union[bool, IResolvable] = None,
  default_action: str = None,
  id: str = None,
  ip_rule: typing.Union[IResolvable, typing.List[IotcentralApplicationNetworkRuleSetIpRule]] = None,
  timeouts: IotcentralApplicationNetworkRuleSetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.iotcentralApplicationId">iotcentral_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.applyToDevice">apply_to_device</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.ipRule">ip_rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]</code> | ip_rule block. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iotcentral_application_id`<sup>Required</sup> <a name="iotcentral_application_id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.iotcentralApplicationId"></a>

```python
iotcentral_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#iotcentral_application_id IotcentralApplicationNetworkRuleSet#iotcentral_application_id}.

---

##### `apply_to_device`<sup>Optional</sup> <a name="apply_to_device" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.applyToDevice"></a>

```python
apply_to_device: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#apply_to_device IotcentralApplicationNetworkRuleSet#apply_to_device}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#default_action IotcentralApplicationNetworkRuleSet#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#id IotcentralApplicationNetworkRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_rule`<sup>Optional</sup> <a name="ip_rule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.ipRule"></a>

```python
ip_rule: typing.Union[IResolvable, typing.List[IotcentralApplicationNetworkRuleSetIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]

ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#ip_rule IotcentralApplicationNetworkRuleSet#ip_rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetConfig.property.timeouts"></a>

```python
timeouts: IotcentralApplicationNetworkRuleSetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#timeouts IotcentralApplicationNetworkRuleSet#timeouts}

---

### IotcentralApplicationNetworkRuleSetIpRule <a name="IotcentralApplicationNetworkRuleSetIpRule" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule(
  ip_mask: str,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.ipMask">ip_mask</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#ip_mask IotcentralApplicationNetworkRuleSet#ip_mask}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#name IotcentralApplicationNetworkRuleSet#name}. |

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#ip_mask IotcentralApplicationNetworkRuleSet#ip_mask}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#name IotcentralApplicationNetworkRuleSet#name}.

---

### IotcentralApplicationNetworkRuleSetTimeouts <a name="IotcentralApplicationNetworkRuleSetTimeouts" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#create IotcentralApplicationNetworkRuleSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#delete IotcentralApplicationNetworkRuleSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#read IotcentralApplicationNetworkRuleSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/resources/iotcentral_application_network_rule_set#update IotcentralApplicationNetworkRuleSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotcentralApplicationNetworkRuleSetIpRuleList <a name="IotcentralApplicationNetworkRuleSetIpRuleList" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IotcentralApplicationNetworkRuleSetIpRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IotcentralApplicationNetworkRuleSetIpRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]]

---


### IotcentralApplicationNetworkRuleSetIpRuleOutputReference <a name="IotcentralApplicationNetworkRuleSetIpRuleOutputReference" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMaskInput">ip_mask_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMask">ip_mask</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_mask_input`<sup>Optional</sup> <a name="ip_mask_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMaskInput"></a>

```python
ip_mask_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ip_mask`<sup>Required</sup> <a name="ip_mask" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.ipMask"></a>

```python
ip_mask: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IotcentralApplicationNetworkRuleSetIpRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetIpRule">IotcentralApplicationNetworkRuleSetIpRule</a>]

---


### IotcentralApplicationNetworkRuleSetTimeoutsOutputReference <a name="IotcentralApplicationNetworkRuleSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import iotcentral_application_network_rule_set

iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IotcentralApplicationNetworkRuleSetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.iotcentralApplicationNetworkRuleSet.IotcentralApplicationNetworkRuleSetTimeouts">IotcentralApplicationNetworkRuleSetTimeouts</a>]

---



