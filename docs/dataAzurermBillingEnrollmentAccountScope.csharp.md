# `data_azurerm_billing_enrollment_account_scope`

Refer to the Terraform Registory for docs: [`data_azurerm_billing_enrollment_account_scope`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope).

# `dataAzurermBillingEnrollmentAccountScope` Submodule <a name="`dataAzurermBillingEnrollmentAccountScope` Submodule" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingEnrollmentAccountScope <a name="DataAzurermBillingEnrollmentAccountScope" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope azurerm_billing_enrollment_account_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingEnrollmentAccountScope(Construct Scope, string Id, DataAzurermBillingEnrollmentAccountScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig">DataAzurermBillingEnrollmentAccountScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig">DataAzurermBillingEnrollmentAccountScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermBillingEnrollmentAccountScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBillingEnrollmentAccountScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBillingEnrollmentAccountScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBillingEnrollmentAccountScope.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference">DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountNameInput">BillingAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountNameInput">EnrollmentAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountName">BillingAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountName">EnrollmentAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeouts"></a>

```csharp
public DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference">DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference</a>

---

##### `BillingAccountNameInput`<sup>Optional</sup> <a name="BillingAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountNameInput"></a>

```csharp
public string BillingAccountNameInput { get; }
```

- *Type:* string

---

##### `EnrollmentAccountNameInput`<sup>Optional</sup> <a name="EnrollmentAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountNameInput"></a>

```csharp
public string EnrollmentAccountNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BillingAccountName`<sup>Required</sup> <a name="BillingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.billingAccountName"></a>

```csharp
public string BillingAccountName { get; }
```

- *Type:* string

---

##### `EnrollmentAccountName`<sup>Required</sup> <a name="EnrollmentAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.enrollmentAccountName"></a>

```csharp
public string EnrollmentAccountName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingEnrollmentAccountScopeConfig <a name="DataAzurermBillingEnrollmentAccountScopeConfig" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingEnrollmentAccountScopeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingAccountName,
    string EnrollmentAccountName,
    string Id = null,
    DataAzurermBillingEnrollmentAccountScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.billingAccountName">BillingAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.enrollmentAccountName">EnrollmentAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingAccountName`<sup>Required</sup> <a name="BillingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.billingAccountName"></a>

```csharp
public string BillingAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#billing_account_name DataAzurermBillingEnrollmentAccountScope#billing_account_name}.

---

##### `EnrollmentAccountName`<sup>Required</sup> <a name="EnrollmentAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.enrollmentAccountName"></a>

```csharp
public string EnrollmentAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#enrollment_account_name DataAzurermBillingEnrollmentAccountScope#enrollment_account_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#id DataAzurermBillingEnrollmentAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeConfig.property.timeouts"></a>

```csharp
public DataAzurermBillingEnrollmentAccountScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts">DataAzurermBillingEnrollmentAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#timeouts DataAzurermBillingEnrollmentAccountScope#timeouts}

---

### DataAzurermBillingEnrollmentAccountScopeTimeouts <a name="DataAzurermBillingEnrollmentAccountScopeTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingEnrollmentAccountScopeTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/data-sources/billing_enrollment_account_scope#read DataAzurermBillingEnrollmentAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermBillingEnrollmentAccountScope.DataAzurermBillingEnrollmentAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



