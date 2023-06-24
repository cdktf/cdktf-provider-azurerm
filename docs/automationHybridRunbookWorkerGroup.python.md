# `azurerm_automation_hybrid_runbook_worker_group`

Refer to the Terraform Registory for docs: [`azurerm_automation_hybrid_runbook_worker_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group).

# `automationHybridRunbookWorkerGroup` Submodule <a name="`automationHybridRunbookWorkerGroup` Submodule" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutomationHybridRunbookWorkerGroup <a name="AutomationHybridRunbookWorkerGroup" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group azurerm_automation_hybrid_runbook_worker_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup(
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
  name: str,
  resource_group_name: str,
  credential_name: str = None,
  id: str = None,
  timeouts: AutomationHybridRunbookWorkerGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#automation_account_name AutomationHybridRunbookWorkerGroup#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#name AutomationHybridRunbookWorkerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#resource_group_name AutomationHybridRunbookWorkerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#credential_name AutomationHybridRunbookWorkerGroup#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#id AutomationHybridRunbookWorkerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.automationAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#automation_account_name AutomationHybridRunbookWorkerGroup#automation_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#name AutomationHybridRunbookWorkerGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#resource_group_name AutomationHybridRunbookWorkerGroup#resource_group_name}.

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#credential_name AutomationHybridRunbookWorkerGroup#credential_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#id AutomationHybridRunbookWorkerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#timeouts AutomationHybridRunbookWorkerGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#create AutomationHybridRunbookWorkerGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#delete AutomationHybridRunbookWorkerGroup#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#read AutomationHybridRunbookWorkerGroup#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#update AutomationHybridRunbookWorkerGroup#update}.

---

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference">AutomationHybridRunbookWorkerGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.automationAccountNameInput">automation_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.timeouts"></a>

```python
timeouts: AutomationHybridRunbookWorkerGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference">AutomationHybridRunbookWorkerGroupTimeoutsOutputReference</a>

---

##### `automation_account_name_input`<sup>Optional</sup> <a name="automation_account_name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.automationAccountNameInput"></a>

```python
automation_account_name_input: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AutomationHybridRunbookWorkerGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a>]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AutomationHybridRunbookWorkerGroupConfig <a name="AutomationHybridRunbookWorkerGroupConfig" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  automation_account_name: str,
  name: str,
  resource_group_name: str,
  credential_name: str = None,
  id: str = None,
  timeouts: AutomationHybridRunbookWorkerGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.automationAccountName">automation_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#automation_account_name AutomationHybridRunbookWorkerGroup#automation_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#name AutomationHybridRunbookWorkerGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#resource_group_name AutomationHybridRunbookWorkerGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#credential_name AutomationHybridRunbookWorkerGroup#credential_name}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#id AutomationHybridRunbookWorkerGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `automation_account_name`<sup>Required</sup> <a name="automation_account_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.automationAccountName"></a>

```python
automation_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#automation_account_name AutomationHybridRunbookWorkerGroup#automation_account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#name AutomationHybridRunbookWorkerGroup#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#resource_group_name AutomationHybridRunbookWorkerGroup#resource_group_name}.

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#credential_name AutomationHybridRunbookWorkerGroup#credential_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#id AutomationHybridRunbookWorkerGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupConfig.property.timeouts"></a>

```python
timeouts: AutomationHybridRunbookWorkerGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#timeouts AutomationHybridRunbookWorkerGroup#timeouts}

---

### AutomationHybridRunbookWorkerGroupTimeouts <a name="AutomationHybridRunbookWorkerGroupTimeouts" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#create AutomationHybridRunbookWorkerGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#delete AutomationHybridRunbookWorkerGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#read AutomationHybridRunbookWorkerGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#update AutomationHybridRunbookWorkerGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#create AutomationHybridRunbookWorkerGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#delete AutomationHybridRunbookWorkerGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#read AutomationHybridRunbookWorkerGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/automation_hybrid_runbook_worker_group#update AutomationHybridRunbookWorkerGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutomationHybridRunbookWorkerGroupTimeoutsOutputReference <a name="AutomationHybridRunbookWorkerGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import automation_hybrid_runbook_worker_group

automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AutomationHybridRunbookWorkerGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.automationHybridRunbookWorkerGroup.AutomationHybridRunbookWorkerGroupTimeouts">AutomationHybridRunbookWorkerGroupTimeouts</a>]

---



