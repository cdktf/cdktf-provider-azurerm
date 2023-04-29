# `azurerm_frontdoor_rules_engine`

Refer to the Terraform Registory for docs: [`azurerm_frontdoor_rules_engine`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine).

# `frontdoorRulesEngine` Submodule <a name="`frontdoorRulesEngine` Submodule" id="@cdktf/provider-azurerm.frontdoorRulesEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FrontdoorRulesEngine <a name="FrontdoorRulesEngine" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine azurerm_frontdoor_rules_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngine(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  frontdoor_name: str,
  name: str,
  resource_group_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRule]] = None,
  timeouts: FrontdoorRulesEngineTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.frontdoorName">frontdoor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frontdoor_name`<sup>Required</sup> <a name="frontdoor_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.frontdoorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.rule"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#rule FrontdoorRulesEngine#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#timeouts FrontdoorRulesEngine#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule">put_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule">reset_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_rule` <a name="put_rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule"></a>

```python
def put_rule(
  value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRule]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putRule.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_rule` <a name="reset_rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetRule"></a>

```python
def reset_rule() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngine.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngine.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngine.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput">frontdoor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput">rule_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName">frontdoor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.rule"></a>

```python
rule: FrontdoorRulesEngineRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList">FrontdoorRulesEngineRuleList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeouts"></a>

```python
timeouts: FrontdoorRulesEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference">FrontdoorRulesEngineTimeoutsOutputReference</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontdoor_name_input`<sup>Optional</sup> <a name="frontdoor_name_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorNameInput"></a>

```python
frontdoor_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `rule_input`<sup>Optional</sup> <a name="rule_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.ruleInput"></a>

```python
rule_input: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[FrontdoorRulesEngineTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `frontdoor_name`<sup>Required</sup> <a name="frontdoor_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.frontdoorName"></a>

```python
frontdoor_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngine.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FrontdoorRulesEngineConfig <a name="FrontdoorRulesEngineConfig" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  frontdoor_name: str,
  name: str,
  resource_group_name: str,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  rule: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRule]] = None,
  timeouts: FrontdoorRulesEngineTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName">frontdoor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule">rule</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `frontdoor_name`<sup>Required</sup> <a name="frontdoor_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.frontdoorName"></a>

```python
frontdoor_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#frontdoor_name FrontdoorRulesEngine#frontdoor_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#resource_group_name FrontdoorRulesEngine#resource_group_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#enabled FrontdoorRulesEngine#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#id FrontdoorRulesEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.rule"></a>

```python
rule: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#rule FrontdoorRulesEngine#rule}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineConfig.property.timeouts"></a>

```python
timeouts: FrontdoorRulesEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#timeouts FrontdoorRulesEngine#timeouts}

---

### FrontdoorRulesEngineRule <a name="FrontdoorRulesEngineRule" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRule(
  name: str,
  priority: typing.Union[int, float],
  action: FrontdoorRulesEngineRuleAction = None,
  match_condition: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleMatchCondition]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition">match_condition</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]</code> | match_condition block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#name FrontdoorRulesEngine#name}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#priority FrontdoorRulesEngine#priority}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.action"></a>

```python
action: FrontdoorRulesEngineRuleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#action FrontdoorRulesEngine#action}

---

##### `match_condition`<sup>Optional</sup> <a name="match_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule.property.matchCondition"></a>

```python
match_condition: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#match_condition FrontdoorRulesEngine#match_condition}

---

### FrontdoorRulesEngineRuleAction <a name="FrontdoorRulesEngineRuleAction" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleAction(
  request_header: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionRequestHeader]] = None,
  response_header: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionResponseHeader]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader">request_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]</code> | request_header block. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader">response_header</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]</code> | response_header block. |

---

##### `request_header`<sup>Optional</sup> <a name="request_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.requestHeader"></a>

```python
request_header: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#request_header FrontdoorRulesEngine#request_header}

---

##### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction.property.responseHeader"></a>

```python
response_header: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#response_header FrontdoorRulesEngine#response_header}

---

### FrontdoorRulesEngineRuleActionRequestHeader <a name="FrontdoorRulesEngineRuleActionRequestHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader(
  header_action_type: str = None,
  header_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType">header_action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `header_action_type`<sup>Optional</sup> <a name="header_action_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerActionType"></a>

```python
header_action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleActionResponseHeader <a name="FrontdoorRulesEngineRuleActionResponseHeader" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader(
  header_action_type: str = None,
  header_name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType">header_action_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |

---

##### `header_action_type`<sup>Optional</sup> <a name="header_action_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerActionType"></a>

```python
header_action_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_action_type FrontdoorRulesEngine#header_action_type}.

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#header_name FrontdoorRulesEngine#header_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

### FrontdoorRulesEngineRuleMatchCondition <a name="FrontdoorRulesEngineRuleMatchCondition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition(
  operator: str,
  negate_condition: typing.Union[bool, IResolvable] = None,
  selector: str = None,
  transform: typing.List[str] = None,
  value: typing.List[str] = None,
  variable: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator">operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition">negate_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector">selector</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform">transform</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value">value</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable">variable</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.operator"></a>

```python
operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#operator FrontdoorRulesEngine#operator}.

---

##### `negate_condition`<sup>Optional</sup> <a name="negate_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.negateCondition"></a>

```python
negate_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#negate_condition FrontdoorRulesEngine#negate_condition}.

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.selector"></a>

```python
selector: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#selector FrontdoorRulesEngine#selector}.

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.transform"></a>

```python
transform: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#transform FrontdoorRulesEngine#transform}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#value FrontdoorRulesEngine#value}.

---

##### `variable`<sup>Optional</sup> <a name="variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition.property.variable"></a>

```python
variable: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#variable FrontdoorRulesEngine#variable}.

---

### FrontdoorRulesEngineTimeouts <a name="FrontdoorRulesEngineTimeouts" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#create FrontdoorRulesEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#delete FrontdoorRulesEngine#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#read FrontdoorRulesEngine#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#update FrontdoorRulesEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FrontdoorRulesEngineRuleActionOutputReference <a name="FrontdoorRulesEngineRuleActionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader">put_request_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader">put_response_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader">reset_request_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader">reset_response_header</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_request_header` <a name="put_request_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader"></a>

```python
def put_request_header(
  value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionRequestHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]

---

##### `put_response_header` <a name="put_response_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader"></a>

```python
def put_response_header(
  value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionResponseHeader]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.putResponseHeader.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]

---

##### `reset_request_header` <a name="reset_request_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetRequestHeader"></a>

```python
def reset_request_header() -> None
```

##### `reset_response_header` <a name="reset_response_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.resetResponseHeader"></a>

```python
def reset_response_header() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader">request_header</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader">response_header</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput">request_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput">response_header_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `request_header`<sup>Required</sup> <a name="request_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeader"></a>

```python
request_header: FrontdoorRulesEngineRuleActionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList">FrontdoorRulesEngineRuleActionRequestHeaderList</a>

---

##### `response_header`<sup>Required</sup> <a name="response_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeader"></a>

```python
response_header: FrontdoorRulesEngineRuleActionResponseHeaderList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList">FrontdoorRulesEngineRuleActionResponseHeaderList</a>

---

##### `request_header_input`<sup>Optional</sup> <a name="request_header_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.requestHeaderInput"></a>

```python
request_header_input: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]

---

##### `response_header_input`<sup>Optional</sup> <a name="response_header_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.responseHeaderInput"></a>

```python
response_header_input: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference.property.internalValue"></a>

```python
internal_value: FrontdoorRulesEngineRuleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---


### FrontdoorRulesEngineRuleActionRequestHeaderList <a name="FrontdoorRulesEngineRuleActionRequestHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorRulesEngineRuleActionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionRequestHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]

---


### FrontdoorRulesEngineRuleActionRequestHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionRequestHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType">reset_header_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_action_type` <a name="reset_header_action_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderActionType"></a>

```python
def reset_header_action_type() -> None
```

##### `reset_header_name` <a name="reset_header_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput">header_action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType">header_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_action_type_input`<sup>Optional</sup> <a name="header_action_type_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionTypeInput"></a>

```python
header_action_type_input: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `header_action_type`<sup>Required</sup> <a name="header_action_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerActionType"></a>

```python
header_action_type: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FrontdoorRulesEngineRuleActionRequestHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>, cdktf.IResolvable]

---


### FrontdoorRulesEngineRuleActionResponseHeaderList <a name="FrontdoorRulesEngineRuleActionResponseHeaderList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorRulesEngineRuleActionResponseHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionResponseHeader]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]

---


### FrontdoorRulesEngineRuleActionResponseHeaderOutputReference <a name="FrontdoorRulesEngineRuleActionResponseHeaderOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType">reset_header_action_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_action_type` <a name="reset_header_action_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderActionType"></a>

```python
def reset_header_action_type() -> None
```

##### `reset_header_name` <a name="reset_header_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput">header_action_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType">header_action_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_action_type_input`<sup>Optional</sup> <a name="header_action_type_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionTypeInput"></a>

```python
header_action_type_input: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `header_action_type`<sup>Required</sup> <a name="header_action_type" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerActionType"></a>

```python
header_action_type: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeaderOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FrontdoorRulesEngineRuleActionResponseHeader, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>, cdktf.IResolvable]

---


### FrontdoorRulesEngineRuleList <a name="FrontdoorRulesEngineRuleList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorRulesEngineRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRule]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>]]

---


### FrontdoorRulesEngineRuleMatchConditionList <a name="FrontdoorRulesEngineRuleMatchConditionList" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FrontdoorRulesEngineRuleMatchConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]

---


### FrontdoorRulesEngineRuleMatchConditionOutputReference <a name="FrontdoorRulesEngineRuleMatchConditionOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition">reset_negate_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector">reset_selector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform">reset_transform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable">reset_variable</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_negate_condition` <a name="reset_negate_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetNegateCondition"></a>

```python
def reset_negate_condition() -> None
```

##### `reset_selector` <a name="reset_selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetSelector"></a>

```python
def reset_selector() -> None
```

##### `reset_transform` <a name="reset_transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetTransform"></a>

```python
def reset_transform() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_variable` <a name="reset_variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.resetVariable"></a>

```python
def reset_variable() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput">negate_condition_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput">operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput">selector_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput">transform_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput">value_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput">variable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition">negate_condition</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector">selector</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform">transform</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value">value</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable">variable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `negate_condition_input`<sup>Optional</sup> <a name="negate_condition_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateConditionInput"></a>

```python
negate_condition_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator_input`<sup>Optional</sup> <a name="operator_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operatorInput"></a>

```python
operator_input: str
```

- *Type:* str

---

##### `selector_input`<sup>Optional</sup> <a name="selector_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selectorInput"></a>

```python
selector_input: str
```

- *Type:* str

---

##### `transform_input`<sup>Optional</sup> <a name="transform_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transformInput"></a>

```python
transform_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.valueInput"></a>

```python
value_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variable_input`<sup>Optional</sup> <a name="variable_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variableInput"></a>

```python
variable_input: str
```

- *Type:* str

---

##### `negate_condition`<sup>Required</sup> <a name="negate_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.negateCondition"></a>

```python
negate_condition: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.selector"></a>

```python
selector: str
```

- *Type:* str

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.transform"></a>

```python
transform: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.value"></a>

```python
value: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `variable`<sup>Required</sup> <a name="variable" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.variable"></a>

```python
variable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FrontdoorRulesEngineRuleMatchCondition, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>, cdktf.IResolvable]

---


### FrontdoorRulesEngineRuleOutputReference <a name="FrontdoorRulesEngineRuleOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition">reset_match_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_action` <a name="put_action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction"></a>

```python
def put_action(
  request_header: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionRequestHeader]] = None,
  response_header: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleActionResponseHeader]] = None
) -> None
```

###### `request_header`<sup>Optional</sup> <a name="request_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction.parameter.requestHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionRequestHeader">FrontdoorRulesEngineRuleActionRequestHeader</a>]]

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#request_header FrontdoorRulesEngine#request_header}

---

###### `response_header`<sup>Optional</sup> <a name="response_header" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putAction.parameter.responseHeader"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionResponseHeader">FrontdoorRulesEngineRuleActionResponseHeader</a>]]

response_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/frontdoor_rules_engine#response_header FrontdoorRulesEngine#response_header}

---

##### `put_match_condition` <a name="put_match_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  value: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleMatchCondition]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_match_condition` <a name="reset_match_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.resetMatchCondition"></a>

```python
def reset_match_condition() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput">action_input</a></code> | <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.action"></a>

```python
action: FrontdoorRulesEngineRuleActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleActionOutputReference">FrontdoorRulesEngineRuleActionOutputReference</a>

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchCondition"></a>

```python
match_condition: FrontdoorRulesEngineRuleMatchConditionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchConditionList">FrontdoorRulesEngineRuleMatchConditionList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.actionInput"></a>

```python
action_input: FrontdoorRulesEngineRuleAction
```

- *Type:* <a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleAction">FrontdoorRulesEngineRuleAction</a>

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: typing.Union[IResolvable, typing.List[FrontdoorRulesEngineRuleMatchCondition]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleMatchCondition">FrontdoorRulesEngineRuleMatchCondition</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRuleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FrontdoorRulesEngineRule, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineRule">FrontdoorRulesEngineRule</a>, cdktf.IResolvable]

---


### FrontdoorRulesEngineTimeoutsOutputReference <a name="FrontdoorRulesEngineTimeoutsOutputReference" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import frontdoor_rules_engine

frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[FrontdoorRulesEngineTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.frontdoorRulesEngine.FrontdoorRulesEngineTimeouts">FrontdoorRulesEngineTimeouts</a>, cdktf.IResolvable]

---



