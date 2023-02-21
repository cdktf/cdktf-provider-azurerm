# `dataAzurermBillingMcaAccountScope` Submodule <a name="`dataAzurermBillingMcaAccountScope` Submodule" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermBillingMcaAccountScope <a name="DataAzurermBillingMcaAccountScope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope azurerm_billing_mca_account_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingMcaAccountScope(Construct Scope, string Id, DataAzurermBillingMcaAccountScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig">DataAzurermBillingMcaAccountScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig">DataAzurermBillingMcaAccountScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermBillingMcaAccountScopeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBillingMcaAccountScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBillingMcaAccountScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermBillingMcaAccountScope.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput">BillingAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput">BillingProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput">InvoiceSectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName">BillingAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName">BillingProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName">InvoiceSectionName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeouts"></a>

```csharp
public DataAzurermBillingMcaAccountScopeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference">DataAzurermBillingMcaAccountScopeTimeoutsOutputReference</a>

---

##### `BillingAccountNameInput`<sup>Optional</sup> <a name="BillingAccountNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountNameInput"></a>

```csharp
public string BillingAccountNameInput { get; }
```

- *Type:* string

---

##### `BillingProfileNameInput`<sup>Optional</sup> <a name="BillingProfileNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileNameInput"></a>

```csharp
public string BillingProfileNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InvoiceSectionNameInput`<sup>Optional</sup> <a name="InvoiceSectionNameInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionNameInput"></a>

```csharp
public string InvoiceSectionNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BillingAccountName`<sup>Required</sup> <a name="BillingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingAccountName"></a>

```csharp
public string BillingAccountName { get; }
```

- *Type:* string

---

##### `BillingProfileName`<sup>Required</sup> <a name="BillingProfileName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.billingProfileName"></a>

```csharp
public string BillingProfileName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InvoiceSectionName`<sup>Required</sup> <a name="InvoiceSectionName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.invoiceSectionName"></a>

```csharp
public string InvoiceSectionName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermBillingMcaAccountScopeConfig <a name="DataAzurermBillingMcaAccountScopeConfig" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingMcaAccountScopeConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BillingAccountName,
    string BillingProfileName,
    string InvoiceSectionName,
    string Id = null,
    DataAzurermBillingMcaAccountScopeTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName">BillingAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName">BillingProfileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName">InvoiceSectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BillingAccountName`<sup>Required</sup> <a name="BillingAccountName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingAccountName"></a>

```csharp
public string BillingAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_account_name DataAzurermBillingMcaAccountScope#billing_account_name}.

---

##### `BillingProfileName`<sup>Required</sup> <a name="BillingProfileName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.billingProfileName"></a>

```csharp
public string BillingProfileName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#billing_profile_name DataAzurermBillingMcaAccountScope#billing_profile_name}.

---

##### `InvoiceSectionName`<sup>Required</sup> <a name="InvoiceSectionName" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.invoiceSectionName"></a>

```csharp
public string InvoiceSectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#invoice_section_name DataAzurermBillingMcaAccountScope#invoice_section_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#id DataAzurermBillingMcaAccountScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeConfig.property.timeouts"></a>

```csharp
public DataAzurermBillingMcaAccountScopeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts">DataAzurermBillingMcaAccountScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#timeouts DataAzurermBillingMcaAccountScope#timeouts}

---

### DataAzurermBillingMcaAccountScopeTimeouts <a name="DataAzurermBillingMcaAccountScopeTimeouts" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingMcaAccountScopeTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/billing_mca_account_scope#read DataAzurermBillingMcaAccountScope#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermBillingMcaAccountScopeTimeoutsOutputReference <a name="DataAzurermBillingMcaAccountScopeTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermBillingMcaAccountScopeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermBillingMcaAccountScope.DataAzurermBillingMcaAccountScopeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



