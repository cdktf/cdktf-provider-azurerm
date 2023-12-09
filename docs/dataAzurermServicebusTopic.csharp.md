# `dataAzurermServicebusTopic` Submodule <a name="`dataAzurermServicebusTopic` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusTopic <a name="DataAzurermServicebusTopic" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic azurerm_servicebus_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusTopic(Construct Scope, string Id, DataAzurermServicebusTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig">DataAzurermServicebusTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig">DataAzurermServicebusTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermServicebusTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetNamespaceName"></a>

```csharp
private void ResetNamespaceName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetResourceGroupName"></a>

```csharp
private void ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusTopic.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermServicebusTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermServicebusTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermServicebusTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermServicebusTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableBatchedOperations">EnableBatchedOperations</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableExpress">EnableExpress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enablePartitioning">EnablePartitioning</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.supportOrdering">SupportOrdering</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference">DataAzurermServicebusTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AutoDeleteOnIdle`<sup>Required</sup> <a name="AutoDeleteOnIdle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.autoDeleteOnIdle"></a>

```csharp
public string AutoDeleteOnIdle { get; }
```

- *Type:* string

---

##### `DefaultMessageTtl`<sup>Required</sup> <a name="DefaultMessageTtl" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.defaultMessageTtl"></a>

```csharp
public string DefaultMessageTtl { get; }
```

- *Type:* string

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.duplicateDetectionHistoryTimeWindow"></a>

```csharp
public string DuplicateDetectionHistoryTimeWindow { get; }
```

- *Type:* string

---

##### `EnableBatchedOperations`<sup>Required</sup> <a name="EnableBatchedOperations" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableBatchedOperations"></a>

```csharp
public IResolvable EnableBatchedOperations { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableExpress`<sup>Required</sup> <a name="EnableExpress" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enableExpress"></a>

```csharp
public IResolvable EnableExpress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnablePartitioning`<sup>Required</sup> <a name="EnablePartitioning" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.enablePartitioning"></a>

```csharp
public IResolvable EnablePartitioning { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaxSizeInMegabytes`<sup>Required</sup> <a name="MaxSizeInMegabytes" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.maxSizeInMegabytes"></a>

```csharp
public double MaxSizeInMegabytes { get; }
```

- *Type:* double

---

##### `RequiresDuplicateDetection`<sup>Required</sup> <a name="RequiresDuplicateDetection" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.requiresDuplicateDetection"></a>

```csharp
public IResolvable RequiresDuplicateDetection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SupportOrdering`<sup>Required</sup> <a name="SupportOrdering" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.supportOrdering"></a>

```csharp
public IResolvable SupportOrdering { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeouts"></a>

```csharp
public DataAzurermServicebusTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference">DataAzurermServicebusTopicTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceNameInput"></a>

```csharp
public string NamespaceNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusTopicConfig <a name="DataAzurermServicebusTopicConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string NamespaceId = null,
    string NamespaceName = null,
    string ResourceGroupName = null,
    DataAzurermServicebusTopicTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#name DataAzurermServicebusTopic#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#id DataAzurermServicebusTopic#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#namespace_id DataAzurermServicebusTopic#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceName">NamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#namespace_name DataAzurermServicebusTopic#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#resource_group_name DataAzurermServicebusTopic#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#name DataAzurermServicebusTopic#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#id DataAzurermServicebusTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#namespace_id DataAzurermServicebusTopic#namespace_id}.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.namespaceName"></a>

```csharp
public string NamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#namespace_name DataAzurermServicebusTopic#namespace_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#resource_group_name DataAzurermServicebusTopic#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicConfig.property.timeouts"></a>

```csharp
public DataAzurermServicebusTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts">DataAzurermServicebusTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#timeouts DataAzurermServicebusTopic#timeouts}

---

### DataAzurermServicebusTopicTimeouts <a name="DataAzurermServicebusTopicTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusTopicTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#read DataAzurermServicebusTopic#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/servicebus_topic#read DataAzurermServicebusTopic#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusTopicTimeoutsOutputReference <a name="DataAzurermServicebusTopicTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermServicebusTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusTopic.DataAzurermServicebusTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



