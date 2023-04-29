# `azurerm_subscription_cost_management_export`

Refer to the Terraform Registory for docs: [`azurerm_subscription_cost_management_export`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export).

# `subscriptionCostManagementExport` Submodule <a name="`subscriptionCostManagementExport` Submodule" id="@cdktf/provider-azurerm.subscriptionCostManagementExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubscriptionCostManagementExport <a name="SubscriptionCostManagementExport" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export azurerm_subscription_cost_management_export}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExport(Construct Scope, string Id, SubscriptionCostManagementExportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig">SubscriptionCostManagementExportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig">SubscriptionCostManagementExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions">PutExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation">PutExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutExportDataOptions` <a name="PutExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions"></a>

```csharp
private void PutExportDataOptions(SubscriptionCostManagementExportExportDataOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `PutExportDataStorageLocation` <a name="PutExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation"></a>

```csharp
private void PutExportDataStorageLocation(SubscriptionCostManagementExportExportDataStorageLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putExportDataStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts"></a>

```csharp
private void PutTimeouts(SubscriptionCostManagementExportTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubscriptionCostManagementExport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubscriptionCostManagementExport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SubscriptionCostManagementExport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions">ExportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation">ExportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput">ExportDataOptionsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput">ExportDataStorageLocationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput">RecurrencePeriodEndDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput">RecurrencePeriodStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput">RecurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate">RecurrencePeriodEndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate">RecurrencePeriodStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ExportDataOptions`<sup>Required</sup> <a name="ExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptions"></a>

```csharp
public SubscriptionCostManagementExportExportDataOptionsOutputReference ExportDataOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference">SubscriptionCostManagementExportExportDataOptionsOutputReference</a>

---

##### `ExportDataStorageLocation`<sup>Required</sup> <a name="ExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocation"></a>

```csharp
public SubscriptionCostManagementExportExportDataStorageLocationOutputReference ExportDataStorageLocation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference">SubscriptionCostManagementExportExportDataStorageLocationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeouts"></a>

```csharp
public SubscriptionCostManagementExportTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference">SubscriptionCostManagementExportTimeoutsOutputReference</a>

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `ExportDataOptionsInput`<sup>Optional</sup> <a name="ExportDataOptionsInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataOptionsInput"></a>

```csharp
public SubscriptionCostManagementExportExportDataOptions ExportDataOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---

##### `ExportDataStorageLocationInput`<sup>Optional</sup> <a name="ExportDataStorageLocationInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.exportDataStorageLocationInput"></a>

```csharp
public SubscriptionCostManagementExportExportDataStorageLocation ExportDataStorageLocationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecurrencePeriodEndDateInput`<sup>Optional</sup> <a name="RecurrencePeriodEndDateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDateInput"></a>

```csharp
public string RecurrencePeriodEndDateInput { get; }
```

- *Type:* string

---

##### `RecurrencePeriodStartDateInput`<sup>Optional</sup> <a name="RecurrencePeriodStartDateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDateInput"></a>

```csharp
public string RecurrencePeriodStartDateInput { get; }
```

- *Type:* string

---

##### `RecurrenceTypeInput`<sup>Optional</sup> <a name="RecurrenceTypeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceTypeInput"></a>

```csharp
public string RecurrenceTypeInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecurrencePeriodEndDate`<sup>Required</sup> <a name="RecurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodEndDate"></a>

```csharp
public string RecurrencePeriodEndDate { get; }
```

- *Type:* string

---

##### `RecurrencePeriodStartDate`<sup>Required</sup> <a name="RecurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrencePeriodStartDate"></a>

```csharp
public string RecurrencePeriodStartDate { get; }
```

- *Type:* string

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubscriptionCostManagementExportConfig <a name="SubscriptionCostManagementExportConfig" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    SubscriptionCostManagementExportExportDataOptions ExportDataOptions,
    SubscriptionCostManagementExportExportDataStorageLocation ExportDataStorageLocation,
    string Name,
    string RecurrencePeriodEndDate,
    string RecurrencePeriodStartDate,
    string RecurrenceType,
    string SubscriptionId,
    object Active = null,
    string Id = null,
    SubscriptionCostManagementExportTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions">ExportDataOptions</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | export_data_options block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation">ExportDataStorageLocation</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | export_data_storage_location block. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate">RecurrencePeriodEndDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate">RecurrencePeriodStartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType">RecurrenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active">Active</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExportDataOptions`<sup>Required</sup> <a name="ExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataOptions"></a>

```csharp
public SubscriptionCostManagementExportExportDataOptions ExportDataOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

export_data_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#export_data_options SubscriptionCostManagementExport#export_data_options}

---

##### `ExportDataStorageLocation`<sup>Required</sup> <a name="ExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.exportDataStorageLocation"></a>

```csharp
public SubscriptionCostManagementExportExportDataStorageLocation ExportDataStorageLocation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

export_data_storage_location block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#export_data_storage_location SubscriptionCostManagementExport#export_data_storage_location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#name SubscriptionCostManagementExport#name}.

---

##### `RecurrencePeriodEndDate`<sup>Required</sup> <a name="RecurrencePeriodEndDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodEndDate"></a>

```csharp
public string RecurrencePeriodEndDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#recurrence_period_end_date SubscriptionCostManagementExport#recurrence_period_end_date}.

---

##### `RecurrencePeriodStartDate`<sup>Required</sup> <a name="RecurrencePeriodStartDate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrencePeriodStartDate"></a>

```csharp
public string RecurrencePeriodStartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#recurrence_period_start_date SubscriptionCostManagementExport#recurrence_period_start_date}.

---

##### `RecurrenceType`<sup>Required</sup> <a name="RecurrenceType" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.recurrenceType"></a>

```csharp
public string RecurrenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#recurrence_type SubscriptionCostManagementExport#recurrence_type}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#subscription_id SubscriptionCostManagementExport#subscription_id}.

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#active SubscriptionCostManagementExport#active}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#id SubscriptionCostManagementExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportConfig.property.timeouts"></a>

```csharp
public SubscriptionCostManagementExportTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts">SubscriptionCostManagementExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#timeouts SubscriptionCostManagementExport#timeouts}

---

### SubscriptionCostManagementExportExportDataOptions <a name="SubscriptionCostManagementExportExportDataOptions" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportExportDataOptions {
    string TimeFrame,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame">TimeFrame</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}. |

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.timeFrame"></a>

```csharp
public string TimeFrame { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#time_frame SubscriptionCostManagementExport#time_frame}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#type SubscriptionCostManagementExport#type}.

---

### SubscriptionCostManagementExportExportDataStorageLocation <a name="SubscriptionCostManagementExportExportDataStorageLocation" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportExportDataStorageLocation {
    string ContainerId,
    string RootFolderPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId">ContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath">RootFolderPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}. |

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.containerId"></a>

```csharp
public string ContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#container_id SubscriptionCostManagementExport#container_id}.

---

##### `RootFolderPath`<sup>Required</sup> <a name="RootFolderPath" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation.property.rootFolderPath"></a>

```csharp
public string RootFolderPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#root_folder_path SubscriptionCostManagementExport#root_folder_path}.

---

### SubscriptionCostManagementExportTimeouts <a name="SubscriptionCostManagementExportTimeouts" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#create SubscriptionCostManagementExport#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#delete SubscriptionCostManagementExport#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#read SubscriptionCostManagementExport#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/subscription_cost_management_export#update SubscriptionCostManagementExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubscriptionCostManagementExportExportDataOptionsOutputReference <a name="SubscriptionCostManagementExportExportDataOptionsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportExportDataOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput">TimeFrameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame">TimeFrame</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeFrameInput`<sup>Optional</sup> <a name="TimeFrameInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrameInput"></a>

```csharp
public string TimeFrameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TimeFrame`<sup>Required</sup> <a name="TimeFrame" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.timeFrame"></a>

```csharp
public string TimeFrame { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptionsOutputReference.property.internalValue"></a>

```csharp
public SubscriptionCostManagementExportExportDataOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataOptions">SubscriptionCostManagementExportExportDataOptions</a>

---


### SubscriptionCostManagementExportExportDataStorageLocationOutputReference <a name="SubscriptionCostManagementExportExportDataStorageLocationOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportExportDataStorageLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput">ContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput">RootFolderPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId">ContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath">RootFolderPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerIdInput`<sup>Optional</sup> <a name="ContainerIdInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerIdInput"></a>

```csharp
public string ContainerIdInput { get; }
```

- *Type:* string

---

##### `RootFolderPathInput`<sup>Optional</sup> <a name="RootFolderPathInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPathInput"></a>

```csharp
public string RootFolderPathInput { get; }
```

- *Type:* string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.containerId"></a>

```csharp
public string ContainerId { get; }
```

- *Type:* string

---

##### `RootFolderPath`<sup>Required</sup> <a name="RootFolderPath" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.rootFolderPath"></a>

```csharp
public string RootFolderPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocationOutputReference.property.internalValue"></a>

```csharp
public SubscriptionCostManagementExportExportDataStorageLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportExportDataStorageLocation">SubscriptionCostManagementExportExportDataStorageLocation</a>

---


### SubscriptionCostManagementExportTimeoutsOutputReference <a name="SubscriptionCostManagementExportTimeoutsOutputReference" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SubscriptionCostManagementExportTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.subscriptionCostManagementExport.SubscriptionCostManagementExportTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



