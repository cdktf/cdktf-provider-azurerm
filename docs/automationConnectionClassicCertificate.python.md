# `azurerm_automation_connection_classic_certificate`

Refer to the Terraform Registory for docs: [`azurerm_automation_connection_classic_certificate`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate).

# `automationConnectionClassicCertificate` Submodule <a name="`automationConnectionClassicCertificate` Submodule" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationConnectionClassicCertificate <a name="AutomationConnectionClassicCertificate" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate azurerm_automation_connection_classic_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  certificate_asset_name: str,
  name: str,
  resource_group_name: str,
  subscription_id: str,
  subscription_name: str,
  description: str = None,
  id: str = None,
  timeouts: AutomationConnectionClassicCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#automation_account_name AutomationConnectionClassicCertificate#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.certificateAssetName">certificate_asset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#certificate_asset_name AutomationConnectionClassicCertificate#certificate_asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#name AutomationConnectionClassicCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#resource_group_name AutomationConnectionClassicCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_id AutomationConnectionClassicCertificate#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.subscriptionName">subscription_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_name AutomationConnectionClassicCertificate#subscription_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#description AutomationConnectionClassicCertificate#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#id AutomationConnectionClassicCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.automationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#automation_account_name AutomationConnectionClassicCertificate#automation_account_name}.

---

##### `certificate_asset_name`<sup>Required</sup> <a name="certificate_asset_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.certificateAssetName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#certificate_asset_name AutomationConnectionClassicCertificate#certificate_asset_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#name AutomationConnectionClassicCertificate#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#resource_group_name AutomationConnectionClassicCertificate#resource_group_name}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_id AutomationConnectionClassicCertificate#subscription_id}.

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.subscriptionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_name AutomationConnectionClassicCertificate#subscription_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#description AutomationConnectionClassicCertificate#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#id AutomationConnectionClassicCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#timeouts AutomationConnectionClassicCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#create AutomationConnectionClassicCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#delete AutomationConnectionClassicCertificate#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#read AutomationConnectionClassicCertificate#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#update AutomationConnectionClassicCertificate#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AutomationConnectionClassicCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AutomationConnectionClassicCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AutomationConnectionClassicCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AutomationConnectionClassicCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AutomationConnectionClassicCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference">AutomationConnectionClassicCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.automationAccountNameInput">automation_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.certificateAssetNameInput">certificate_asset_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionNameInput">subscription_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.certificateAssetName">certificate_asset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionName">subscription_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.timeouts"></a>

```python
timeouts: AutomationConnectionClassicCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference">AutomationConnectionClassicCertificateTimeoutsOutputReference</a>

---

##### `automation_account_name_input`<sup>Optional</sup> <a name="automation_account_name_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.automationAccountNameInput"></a>

```python
automation_account_name_input: str
```

- *Type:* str

---

##### `certificate_asset_name_input`<sup>Optional</sup> <a name="certificate_asset_name_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.certificateAssetNameInput"></a>

```python
certificate_asset_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `subscription_name_input`<sup>Optional</sup> <a name="subscription_name_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionNameInput"></a>

```python
subscription_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutomationConnectionClassicCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a>]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

---

##### `certificate_asset_name`<sup>Required</sup> <a name="certificate_asset_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.certificateAssetName"></a>

```python
certificate_asset_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationConnectionClassicCertificateConfig <a name="AutomationConnectionClassicCertificateConfig" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  certificate_asset_name: str,
  name: str,
  resource_group_name: str,
  subscription_id: str,
  subscription_name: str,
  description: str = None,
  id: str = None,
  timeouts: AutomationConnectionClassicCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#automation_account_name AutomationConnectionClassicCertificate#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.certificateAssetName">certificate_asset_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#certificate_asset_name AutomationConnectionClassicCertificate#certificate_asset_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#name AutomationConnectionClassicCertificate#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#resource_group_name AutomationConnectionClassicCertificate#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_id AutomationConnectionClassicCertificate#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.subscriptionName">subscription_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_name AutomationConnectionClassicCertificate#subscription_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#description AutomationConnectionClassicCertificate#description}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#id AutomationConnectionClassicCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#automation_account_name AutomationConnectionClassicCertificate#automation_account_name}.

---

##### `certificate_asset_name`<sup>Required</sup> <a name="certificate_asset_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.certificateAssetName"></a>

```python
certificate_asset_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#certificate_asset_name AutomationConnectionClassicCertificate#certificate_asset_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#name AutomationConnectionClassicCertificate#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#resource_group_name AutomationConnectionClassicCertificate#resource_group_name}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_id AutomationConnectionClassicCertificate#subscription_id}.

---

##### `subscription_name`<sup>Required</sup> <a name="subscription_name" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.subscriptionName"></a>

```python
subscription_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#subscription_name AutomationConnectionClassicCertificate#subscription_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#description AutomationConnectionClassicCertificate#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#id AutomationConnectionClassicCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateConfig.property.timeouts"></a>

```python
timeouts: AutomationConnectionClassicCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#timeouts AutomationConnectionClassicCertificate#timeouts}

---

### AutomationConnectionClassicCertificateTimeouts <a name="AutomationConnectionClassicCertificateTimeouts" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#create AutomationConnectionClassicCertificate#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#delete AutomationConnectionClassicCertificate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#read AutomationConnectionClassicCertificate#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#update AutomationConnectionClassicCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#create AutomationConnectionClassicCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#delete AutomationConnectionClassicCertificate#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#read AutomationConnectionClassicCertificate#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/automation_connection_classic_certificate#update AutomationConnectionClassicCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationConnectionClassicCertificateTimeoutsOutputReference <a name="AutomationConnectionClassicCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_connection_classic_certificate

automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationConnectionClassicCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationConnectionClassicCertificate.AutomationConnectionClassicCertificateTimeouts">AutomationConnectionClassicCertificateTimeouts</a>]

---



