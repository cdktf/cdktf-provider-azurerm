# `data_azurerm_billing_mca_account_scope`

Refer to the Terraform Registory for docs: [`data_azurerm_billing_mca_account_scope`](https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope).

# `dataAzurermBillingMcaAccountScope` Submodule <a name="`dataAzurermBillingMcaAccountScope` Submodule" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingMcaAccountScope <a name="DataAzurermBillingMcaAccountScope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope azurerm_billing_mca_account_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_account_name: str,
  billing_profile_name: str,
  invoice_section_name: str,
  id: str = None,
  timeouts: DataAzurermBillingMcaAccountScopeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingAccountName">billing_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingProfileName">billing_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.invoiceSectionName">invoice_section_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_account_name`<sup>Required</sup> <a name="billing_account_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}.

---

##### `billing_profile_name`<sup>Required</sup> <a name="billing_profile_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.billingProfileName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}.

---

##### `invoice_section_name`<sup>Required</sup> <a name="invoice_section_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.invoiceSectionName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput">billing_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput">billing_profile_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput">invoice_section_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName">billing_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName">billing_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName">invoice_section_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts"></a>

```python
timeouts: DataAzurermBillingMcaAccountScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a>

---

##### `billing_account_name_input`<sup>Optional</sup> <a name="billing_account_name_input" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput"></a>

```python
billing_account_name_input: str
```

- *Type:* str

---

##### `billing_profile_name_input`<sup>Optional</sup> <a name="billing_profile_name_input" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput"></a>

```python
billing_profile_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `invoice_section_name_input`<sup>Optional</sup> <a name="invoice_section_name_input" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput"></a>

```python
invoice_section_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[DataAzurermBillingMcaAccountScopeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>, cdktf.IResolvable]

---

##### `billing_account_name`<sup>Required</sup> <a name="billing_account_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName"></a>

```python
billing_account_name: str
```

- *Type:* str

---

##### `billing_profile_name`<sup>Required</sup> <a name="billing_profile_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName"></a>

```python
billing_profile_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `invoice_section_name`<sup>Required</sup> <a name="invoice_section_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName"></a>

```python
invoice_section_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingMcaAccountScopeConfig <a name="DataAzurermBillingMcaAccountScopeConfig" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_account_name: str,
  billing_profile_name: str,
  invoice_section_name: str,
  id: str = None,
  timeouts: DataAzurermBillingMcaAccountScopeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName">billing_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName">billing_profile_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName">invoice_section_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_account_name`<sup>Required</sup> <a name="billing_account_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName"></a>

```python
billing_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}.

---

##### `billing_profile_name`<sup>Required</sup> <a name="billing_profile_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName"></a>

```python
billing_profile_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}.

---

##### `invoice_section_name`<sup>Required</sup> <a name="invoice_section_name" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName"></a>

```python
invoice_section_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts"></a>

```python
timeouts: DataAzurermBillingMcaAccountScopeTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}

---

### DataAzurermBillingMcaAccountScopeTimeouts <a name="DataAzurermBillingMcaAccountScopeTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingMcaAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingMcaAccountScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_billing_mca_account_scope

dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAzurermBillingMcaAccountScopeTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>, cdktf.IResolvable]

---



