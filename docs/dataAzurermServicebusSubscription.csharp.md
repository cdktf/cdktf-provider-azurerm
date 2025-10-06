# `dataAzurermServicebusSubscription` Submodule <a name="`dataAzurermServicebusSubscription` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusSubscription <a name="DataAzurermServicebusSubscription" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription azurerm_servicebus_subscription}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusSubscription(Construct Scope, string Id, DataAzurermServicebusSubscriptionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig">DataAzurermServicebusSubscriptionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig">DataAzurermServicebusSubscriptionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicId">ResetTopicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicName">ResetTopicName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermServicebusSubscriptionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetNamespaceName"></a>

```csharp
private void ResetNamespaceName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetResourceGroupName"></a>

```csharp
private void ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTopicId` <a name="ResetTopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicId"></a>

```csharp
private void ResetTopicId()
```

##### `ResetTopicName` <a name="ResetTopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.resetTopicName"></a>

```csharp
private void ResetTopicName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusSubscription resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusSubscription.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusSubscription.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusSubscription.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusSubscription.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermServicebusSubscription resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusSubscription to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusSubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusSubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.batchedOperationsEnabled">BatchedOperationsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnFilterEvaluationError">DeadLetteringOnFilterEvaluationError</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnMessageExpiration">DeadLetteringOnMessageExpiration</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.enableBatchedOperations">EnableBatchedOperations</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardDeadLetteredMessagesTo">ForwardDeadLetteredMessagesTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardTo">ForwardTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lockDuration">LockDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.requiresSession">RequiresSession</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference">DataAzurermServicebusSubscriptionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicIdInput">TopicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicNameInput">TopicNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicId">TopicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicName">TopicName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoDeleteOnIdle`<sup>Required</sup> <a name="AutoDeleteOnIdle" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; }
```

- *Type:* string

---

##### `BatchedOperationsEnabled`<sup>Required</sup> <a name="BatchedOperationsEnabled" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.batchedOperationsEnabled"></a>

```csharp
public IResolvable BatchedOperationsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeadLetteringOnFilterEvaluationError`<sup>Required</sup> <a name="DeadLetteringOnFilterEvaluationError" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnFilterEvaluationError"></a>

```csharp
public IResolvable DeadLetteringOnFilterEvaluationError { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeadLetteringOnMessageExpiration`<sup>Required</sup> <a name="DeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.deadLetteringOnMessageExpiration"></a>

```csharp
public IResolvable DeadLetteringOnMessageExpiration { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DefaultMessageTtl`<sup>Required</sup> <a name="DefaultMessageTtl" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; }
```

- *Type:* string

---

##### `EnableBatchedOperations`<sup>Required</sup> <a name="EnableBatchedOperations" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.enableBatchedOperations"></a>

```csharp
public IResolvable EnableBatchedOperations { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ForwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="ForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardDeadLetteredMessagesTo"></a>

```csharp
public string ForwardDeadLetteredMessagesTo { get; }
```

- *Type:* string

---

##### `ForwardTo`<sup>Required</sup> <a name="ForwardTo" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.forwardTo"></a>

```csharp
public string ForwardTo { get; }
```

- *Type:* string

---

##### `LockDuration`<sup>Required</sup> <a name="LockDuration" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.lockDuration"></a>

```csharp
public string LockDuration { get; }
```

- *Type:* string

---

##### `MaxDeliveryCount`<sup>Required</sup> <a name="MaxDeliveryCount" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.maxDeliveryCount"></a>

```csharp
public double MaxDeliveryCount { get; }
```

- *Type:* double

---

##### `RequiresSession`<sup>Required</sup> <a name="RequiresSession" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.requiresSession"></a>

```csharp
public IResolvable RequiresSession { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeouts"></a>

```csharp
public DataAzurermServicebusSubscriptionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference">DataAzurermServicebusSubscriptionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.timeoutsInput"></a>

```csharp
public IResolvable|DataAzurermServicebusSubscriptionTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

---

##### `TopicIdInput`<sup>Optional</sup> <a name="TopicIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicIdInput"></a>

```csharp
public string TopicIdInput { get; }
```

- *Type:* string

---

##### `TopicNameInput`<sup>Optional</sup> <a name="TopicNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicNameInput"></a>

```csharp
public string TopicNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `TopicId`<sup>Required</sup> <a name="TopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicId"></a>

```csharp
public string TopicId { get; }
```

- *Type:* string

---

##### `TopicName`<sup>Required</sup> <a name="TopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.topicName"></a>

```csharp
public string TopicName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscription.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusSubscriptionConfig <a name="DataAzurermServicebusSubscriptionConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusSubscriptionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Id = null,
    string NamespaceName = null,
    string ResourceGroupName = null,
    DataAzurermServicebusSubscriptionTimeouts Timeouts = null,
    string TopicId = null,
    string TopicName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#name DataAzurermServicebusSubscription#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#id DataAzurermServicebusSubscription#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#namespace_name DataAzurermServicebusSubscription#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#resource_group_name DataAzurermServicebusSubscription#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicId">TopicId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#topic_id DataAzurermServicebusSubscription#topic_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicName">TopicName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#topic_name DataAzurermServicebusSubscription#topic_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#name DataAzurermServicebusSubscription#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#id DataAzurermServicebusSubscription#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#namespace_name DataAzurermServicebusSubscription#namespace_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#resource_group_name DataAzurermServicebusSubscription#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.timeouts"></a>

```csharp
public DataAzurermServicebusSubscriptionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#timeouts DataAzurermServicebusSubscription#timeouts}

---

##### `TopicId`<sup>Optional</sup> <a name="TopicId" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicId"></a>

```csharp
public string TopicId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#topic_id DataAzurermServicebusSubscription#topic_id}.

---

##### `TopicName`<sup>Optional</sup> <a name="TopicName" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionConfig.property.topicName"></a>

```csharp
public string TopicName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#topic_name DataAzurermServicebusSubscription#topic_name}.

---

### DataAzurermServicebusSubscriptionTimeouts <a name="DataAzurermServicebusSubscriptionTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusSubscriptionTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#read DataAzurermServicebusSubscription#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/servicebus_subscription#read DataAzurermServicebusSubscription#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusSubscriptionTimeoutsOutputReference <a name="DataAzurermServicebusSubscriptionTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusSubscriptionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataAzurermServicebusSubscriptionTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataAzurermServicebusSubscription.DataAzurermServicebusSubscriptionTimeouts">DataAzurermServicebusSubscriptionTimeouts</a>

---



