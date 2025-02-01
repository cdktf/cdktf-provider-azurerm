# `firewallNetworkRuleCollection` Submodule <a name="`firewallNetworkRuleCollection` Submodule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirewallNetworkRuleCollection <a name="FirewallNetworkRuleCollection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection azurerm_firewall_network_rule_collection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  azure_firewall_name: str,
  name: str,
  priority: typing.Union[int, float],
  resource_group_name: str,
  rule: typing.Union[IResolvable, typing.List[FirewallNetworkRuleCollectionRule]],
  id: str = None,
  timeouts: FirewallNetworkRuleCollectionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.azureFirewallName">azure_firewall_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}.

---

##### `azure_firewall_name`<sup>Required</sup> <a name="azure_firewall_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.azureFirewallName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#rule FirewallNetworkRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#timeouts FirewallNetworkRuleCollection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[FirewallNetworkRuleCollectionRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirewallNetworkRuleCollection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirewallNetworkRuleCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirewallNetworkRuleCollection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirewallNetworkRuleCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirewallNetworkRuleCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList">FirewallNetworkRuleCollectionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference">FirewallNetworkRuleCollectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallNameInput">azure_firewall_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallName">azure_firewall_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.rule"></a>

```python
rule: FirewallNetworkRuleCollectionRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList">FirewallNetworkRuleCollectionRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeouts"></a>

```python
timeouts: FirewallNetworkRuleCollectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference">FirewallNetworkRuleCollectionTimeoutsOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `azure_firewall_name_input`<sup>Optional</sup> <a name="azure_firewall_name_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallNameInput"></a>

```python
azure_firewall_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[FirewallNetworkRuleCollectionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirewallNetworkRuleCollectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `azure_firewall_name`<sup>Required</sup> <a name="azure_firewall_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.azureFirewallName"></a>

```python
azure_firewall_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirewallNetworkRuleCollectionConfig <a name="FirewallNetworkRuleCollectionConfig" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  azure_firewall_name: str,
  name: str,
  priority: typing.Union[int, float],
  resource_group_name: str,
  rule: typing.Union[IResolvable, typing.List[FirewallNetworkRuleCollectionRule]],
  id: str = None,
  timeouts: FirewallNetworkRuleCollectionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.azureFirewallName">azure_firewall_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#action FirewallNetworkRuleCollection#action}.

---

##### `azure_firewall_name`<sup>Required</sup> <a name="azure_firewall_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.azureFirewallName"></a>

```python
azure_firewall_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#azure_firewall_name FirewallNetworkRuleCollection#azure_firewall_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#priority FirewallNetworkRuleCollection#priority}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#resource_group_name FirewallNetworkRuleCollection#resource_group_name}.

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[FirewallNetworkRuleCollectionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#rule FirewallNetworkRuleCollection#rule}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#id FirewallNetworkRuleCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionConfig.property.timeouts"></a>

```python
timeouts: FirewallNetworkRuleCollectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#timeouts FirewallNetworkRuleCollection#timeouts}

---

### FirewallNetworkRuleCollectionRule <a name="FirewallNetworkRuleCollectionRule" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule(
  destination_ports: typing.List[str],
  name: str,
  protocols: typing.List[str],
  description: str = None,
  destination_addresses: typing.List[str] = None,
  destination_fqdns: typing.List[str] = None,
  destination_ip_groups: typing.List[str] = None,
  source_addresses: typing.List[str] = None,
  source_ip_groups: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_ports FirewallNetworkRuleCollection#destination_ports}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#protocols FirewallNetworkRuleCollection#protocols}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#description FirewallNetworkRuleCollection#description}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationAddresses">destination_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_addresses FirewallNetworkRuleCollection#destination_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationFqdns">destination_fqdns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationIpGroups">destination_ip_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceAddresses">source_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#source_addresses FirewallNetworkRuleCollection#source_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceIpGroups">source_ip_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}. |

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_ports FirewallNetworkRuleCollection#destination_ports}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#name FirewallNetworkRuleCollection#name}.

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#protocols FirewallNetworkRuleCollection#protocols}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#description FirewallNetworkRuleCollection#description}.

---

##### `destination_addresses`<sup>Optional</sup> <a name="destination_addresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationAddresses"></a>

```python
destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_addresses FirewallNetworkRuleCollection#destination_addresses}.

---

##### `destination_fqdns`<sup>Optional</sup> <a name="destination_fqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationFqdns"></a>

```python
destination_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_fqdns FirewallNetworkRuleCollection#destination_fqdns}.

---

##### `destination_ip_groups`<sup>Optional</sup> <a name="destination_ip_groups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.destinationIpGroups"></a>

```python
destination_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#destination_ip_groups FirewallNetworkRuleCollection#destination_ip_groups}.

---

##### `source_addresses`<sup>Optional</sup> <a name="source_addresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceAddresses"></a>

```python
source_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#source_addresses FirewallNetworkRuleCollection#source_addresses}.

---

##### `source_ip_groups`<sup>Optional</sup> <a name="source_ip_groups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule.property.sourceIpGroups"></a>

```python
source_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#source_ip_groups FirewallNetworkRuleCollection#source_ip_groups}.

---

### FirewallNetworkRuleCollectionTimeouts <a name="FirewallNetworkRuleCollectionTimeouts" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#create FirewallNetworkRuleCollection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#delete FirewallNetworkRuleCollection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#read FirewallNetworkRuleCollection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.17.0/docs/resources/firewall_network_rule_collection#update FirewallNetworkRuleCollection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirewallNetworkRuleCollectionRuleList <a name="FirewallNetworkRuleCollectionRuleList" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirewallNetworkRuleCollectionRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirewallNetworkRuleCollectionRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]]

---


### FirewallNetworkRuleCollectionRuleOutputReference <a name="FirewallNetworkRuleCollectionRuleOutputReference" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses">reset_destination_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns">reset_destination_fqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups">reset_destination_ip_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceAddresses">reset_source_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups">reset_source_ip_groups</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_destination_addresses` <a name="reset_destination_addresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationAddresses"></a>

```python
def reset_destination_addresses() -> None
```

##### `reset_destination_fqdns` <a name="reset_destination_fqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationFqdns"></a>

```python
def reset_destination_fqdns() -> None
```

##### `reset_destination_ip_groups` <a name="reset_destination_ip_groups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetDestinationIpGroups"></a>

```python
def reset_destination_ip_groups() -> None
```

##### `reset_source_addresses` <a name="reset_source_addresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceAddresses"></a>

```python
def reset_source_addresses() -> None
```

##### `reset_source_ip_groups` <a name="reset_source_ip_groups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.resetSourceIpGroups"></a>

```python
def reset_source_ip_groups() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput">destination_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput">destination_fqdns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput">destination_ip_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput">destination_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocolsInput">protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput">source_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput">source_ip_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddresses">destination_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdns">destination_fqdns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups">destination_ip_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocols">protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddresses">source_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups">source_ip_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_addresses_input`<sup>Optional</sup> <a name="destination_addresses_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddressesInput"></a>

```python
destination_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_fqdns_input`<sup>Optional</sup> <a name="destination_fqdns_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdnsInput"></a>

```python
destination_fqdns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ip_groups_input`<sup>Optional</sup> <a name="destination_ip_groups_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroupsInput"></a>

```python
destination_ip_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ports_input`<sup>Optional</sup> <a name="destination_ports_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPortsInput"></a>

```python
destination_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocols_input`<sup>Optional</sup> <a name="protocols_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocolsInput"></a>

```python
protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_addresses_input`<sup>Optional</sup> <a name="source_addresses_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddressesInput"></a>

```python
source_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_groups_input`<sup>Optional</sup> <a name="source_ip_groups_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroupsInput"></a>

```python
source_ip_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_addresses`<sup>Required</sup> <a name="destination_addresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationAddresses"></a>

```python
destination_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_fqdns`<sup>Required</sup> <a name="destination_fqdns" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationFqdns"></a>

```python
destination_fqdns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ip_groups`<sup>Required</sup> <a name="destination_ip_groups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationIpGroups"></a>

```python
destination_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.protocols"></a>

```python
protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_addresses`<sup>Required</sup> <a name="source_addresses" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceAddresses"></a>

```python
source_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_groups`<sup>Required</sup> <a name="source_ip_groups" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.sourceIpGroups"></a>

```python
source_ip_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirewallNetworkRuleCollectionRule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionRule">FirewallNetworkRuleCollectionRule</a>]

---


### FirewallNetworkRuleCollectionTimeoutsOutputReference <a name="FirewallNetworkRuleCollectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import firewall_network_rule_collection

firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirewallNetworkRuleCollectionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.firewallNetworkRuleCollection.FirewallNetworkRuleCollectionTimeouts">FirewallNetworkRuleCollectionTimeouts</a>]

---



