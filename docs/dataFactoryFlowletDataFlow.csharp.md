# `azurerm_data_factory_flowlet_data_flow`

Refer to the Terraform Registory for docs: [`azurerm_data_factory_flowlet_data_flow`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow).

# `dataFactoryFlowletDataFlow` Submodule <a name="`dataFactoryFlowletDataFlow` Submodule" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryFlowletDataFlow <a name="DataFactoryFlowletDataFlow" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow azurerm_data_factory_flowlet_data_flow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlow(Construct Scope, string Id, DataFactoryFlowletDataFlowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig">DataFactoryFlowletDataFlowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig">DataFactoryFlowletDataFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putSink">PutSink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putTransformation">PutTransformation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetScript">ResetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetScriptLines">ResetScriptLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetTransformation">ResetTransformation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSink` <a name="PutSink" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putSink"></a>

```csharp
private void PutSink(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putSink.parameter.value"></a>

- *Type:* object

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putSource"></a>

```csharp
private void PutSource(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putSource.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryFlowletDataFlowTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts">DataFactoryFlowletDataFlowTimeouts</a>

---

##### `PutTransformation` <a name="PutTransformation" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putTransformation"></a>

```csharp
private void PutTransformation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.putTransformation.parameter.value"></a>

- *Type:* object

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFolder` <a name="ResetFolder" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScript` <a name="ResetScript" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetScript"></a>

```csharp
private void ResetScript()
```

##### `ResetScriptLines` <a name="ResetScriptLines" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetScriptLines"></a>

```csharp
private void ResetScriptLines()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTransformation` <a name="ResetTransformation" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.resetTransformation"></a>

```csharp
private void ResetTransformation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryFlowletDataFlow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryFlowletDataFlow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryFlowletDataFlow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.sink">Sink</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList">DataFactoryFlowletDataFlowSinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.source">Source</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList">DataFactoryFlowletDataFlowSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference">DataFactoryFlowletDataFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.transformation">Transformation</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList">DataFactoryFlowletDataFlowTransformationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.scriptLinesInput">ScriptLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.sinkInput">SinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.transformationInput">TransformationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.scriptLines">ScriptLines</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.sink"></a>

```csharp
public DataFactoryFlowletDataFlowSinkList Sink { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList">DataFactoryFlowletDataFlowSinkList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.source"></a>

```csharp
public DataFactoryFlowletDataFlowSourceList Source { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList">DataFactoryFlowletDataFlowSourceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.timeouts"></a>

```csharp
public DataFactoryFlowletDataFlowTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference">DataFactoryFlowletDataFlowTimeoutsOutputReference</a>

---

##### `Transformation`<sup>Required</sup> <a name="Transformation" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.transformation"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationList Transformation { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList">DataFactoryFlowletDataFlowTransformationList</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `ScriptLinesInput`<sup>Optional</sup> <a name="ScriptLinesInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.scriptLinesInput"></a>

```csharp
public string[] ScriptLinesInput { get; }
```

- *Type:* string[]

---

##### `SinkInput`<sup>Optional</sup> <a name="SinkInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.sinkInput"></a>

```csharp
public object SinkInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TransformationInput`<sup>Optional</sup> <a name="TransformationInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.transformationInput"></a>

```csharp
public object TransformationInput { get; }
```

- *Type:* object

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `ScriptLines`<sup>Required</sup> <a name="ScriptLines" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.scriptLines"></a>

```csharp
public string[] ScriptLines { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryFlowletDataFlowConfig <a name="DataFactoryFlowletDataFlowConfig" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    object Sink,
    object Source,
    string[] Annotations = null,
    string Description = null,
    string Folder = null,
    string Id = null,
    string Script = null,
    string[] ScriptLines = null,
    DataFactoryFlowletDataFlowTimeouts Timeouts = null,
    object Transformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#data_factory_id DataFactoryFlowletDataFlow#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.sink">Sink</a></code> | <code>object</code> | sink block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.source">Source</a></code> | <code>object</code> | source block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#annotations DataFactoryFlowletDataFlow#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.folder">Folder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#folder DataFactoryFlowletDataFlow#folder}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#id DataFactoryFlowletDataFlow#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#script DataFactoryFlowletDataFlow#script}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.scriptLines">ScriptLines</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#script_lines DataFactoryFlowletDataFlow#script_lines}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts">DataFactoryFlowletDataFlowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.transformation">Transformation</a></code> | <code>object</code> | transformation block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#data_factory_id DataFactoryFlowletDataFlow#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Sink`<sup>Required</sup> <a name="Sink" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.sink"></a>

```csharp
public object Sink { get; set; }
```

- *Type:* object

sink block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#sink DataFactoryFlowletDataFlow#sink}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.source"></a>

```csharp
public object Source { get; set; }
```

- *Type:* object

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#source DataFactoryFlowletDataFlow#source}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#annotations DataFactoryFlowletDataFlow#annotations}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#folder DataFactoryFlowletDataFlow#folder}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#id DataFactoryFlowletDataFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#script DataFactoryFlowletDataFlow#script}.

---

##### `ScriptLines`<sup>Optional</sup> <a name="ScriptLines" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.scriptLines"></a>

```csharp
public string[] ScriptLines { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#script_lines DataFactoryFlowletDataFlow#script_lines}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.timeouts"></a>

```csharp
public DataFactoryFlowletDataFlowTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts">DataFactoryFlowletDataFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#timeouts DataFactoryFlowletDataFlow#timeouts}

---

##### `Transformation`<sup>Optional</sup> <a name="Transformation" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowConfig.property.transformation"></a>

```csharp
public object Transformation { get; set; }
```

- *Type:* object

transformation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#transformation DataFactoryFlowletDataFlow#transformation}

---

### DataFactoryFlowletDataFlowSink <a name="DataFactoryFlowletDataFlowSink" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSink {
    string Name,
    DataFactoryFlowletDataFlowSinkDataset Dataset = null,
    string Description = null,
    DataFactoryFlowletDataFlowSinkFlowlet Flowlet = null,
    DataFactoryFlowletDataFlowSinkLinkedService LinkedService = null,
    DataFactoryFlowletDataFlowSinkRejectedLinkedService RejectedLinkedService = null,
    DataFactoryFlowletDataFlowSinkSchemaLinkedService SchemaLinkedService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a></code> | rejected_linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a></code> | schema_linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.dataset"></a>

```csharp
public DataFactoryFlowletDataFlowSinkDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset DataFactoryFlowletDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.flowlet"></a>

```csharp
public DataFactoryFlowletDataFlowSinkFlowlet Flowlet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#flowlet DataFactoryFlowletDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.linkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSinkLinkedService LinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#linked_service DataFactoryFlowletDataFlow#linked_service}

---

##### `RejectedLinkedService`<sup>Optional</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.rejectedLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSinkRejectedLinkedService RejectedLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a>

rejected_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#rejected_linked_service DataFactoryFlowletDataFlow#rejected_linked_service}

---

##### `SchemaLinkedService`<sup>Optional</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSink.property.schemaLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSinkSchemaLinkedService SchemaLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a>

schema_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#schema_linked_service DataFactoryFlowletDataFlow#schema_linked_service}

---

### DataFactoryFlowletDataFlowSinkDataset <a name="DataFactoryFlowletDataFlowSinkDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkDataset {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSinkFlowlet <a name="DataFactoryFlowletDataFlowSinkFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkFlowlet {
    string Name,
    string DatasetParameters = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset_parameters DataFactoryFlowletDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset_parameters DataFactoryFlowletDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSinkLinkedService <a name="DataFactoryFlowletDataFlowSinkLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSinkRejectedLinkedService <a name="DataFactoryFlowletDataFlowSinkRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkRejectedLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSinkSchemaLinkedService <a name="DataFactoryFlowletDataFlowSinkSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkSchemaLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSource <a name="DataFactoryFlowletDataFlowSource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSource {
    string Name,
    DataFactoryFlowletDataFlowSourceDataset Dataset = null,
    string Description = null,
    DataFactoryFlowletDataFlowSourceFlowlet Flowlet = null,
    DataFactoryFlowletDataFlowSourceLinkedService LinkedService = null,
    DataFactoryFlowletDataFlowSourceRejectedLinkedService RejectedLinkedService = null,
    DataFactoryFlowletDataFlowSourceSchemaLinkedService SchemaLinkedService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a></code> | linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a></code> | rejected_linked_service block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a></code> | schema_linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.dataset"></a>

```csharp
public DataFactoryFlowletDataFlowSourceDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset DataFactoryFlowletDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.flowlet"></a>

```csharp
public DataFactoryFlowletDataFlowSourceFlowlet Flowlet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#flowlet DataFactoryFlowletDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.linkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSourceLinkedService LinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#linked_service DataFactoryFlowletDataFlow#linked_service}

---

##### `RejectedLinkedService`<sup>Optional</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.rejectedLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSourceRejectedLinkedService RejectedLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a>

rejected_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#rejected_linked_service DataFactoryFlowletDataFlow#rejected_linked_service}

---

##### `SchemaLinkedService`<sup>Optional</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSource.property.schemaLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSourceSchemaLinkedService SchemaLinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a>

schema_linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#schema_linked_service DataFactoryFlowletDataFlow#schema_linked_service}

---

### DataFactoryFlowletDataFlowSourceDataset <a name="DataFactoryFlowletDataFlowSourceDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceDataset {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSourceFlowlet <a name="DataFactoryFlowletDataFlowSourceFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceFlowlet {
    string Name,
    string DatasetParameters = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset_parameters DataFactoryFlowletDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset_parameters DataFactoryFlowletDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSourceLinkedService <a name="DataFactoryFlowletDataFlowSourceLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSourceRejectedLinkedService <a name="DataFactoryFlowletDataFlowSourceRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceRejectedLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowSourceSchemaLinkedService <a name="DataFactoryFlowletDataFlowSourceSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceSchemaLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowTimeouts <a name="DataFactoryFlowletDataFlowTimeouts" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#create DataFactoryFlowletDataFlow#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#delete DataFactoryFlowletDataFlow#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#read DataFactoryFlowletDataFlow#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#update DataFactoryFlowletDataFlow#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#create DataFactoryFlowletDataFlow#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#delete DataFactoryFlowletDataFlow#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#read DataFactoryFlowletDataFlow#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#update DataFactoryFlowletDataFlow#update}.

---

### DataFactoryFlowletDataFlowTransformation <a name="DataFactoryFlowletDataFlowTransformation" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformation {
    string Name,
    DataFactoryFlowletDataFlowTransformationDataset Dataset = null,
    string Description = null,
    DataFactoryFlowletDataFlowTransformationFlowlet Flowlet = null,
    DataFactoryFlowletDataFlowTransformationLinkedService LinkedService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a></code> | flowlet block. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a></code> | linked_service block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.dataset"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationDataset Dataset { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset DataFactoryFlowletDataFlow#dataset}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#description DataFactoryFlowletDataFlow#description}.

---

##### `Flowlet`<sup>Optional</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.flowlet"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationFlowlet Flowlet { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a>

flowlet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#flowlet DataFactoryFlowletDataFlow#flowlet}

---

##### `LinkedService`<sup>Optional</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformation.property.linkedService"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationLinkedService LinkedService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a>

linked_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#linked_service DataFactoryFlowletDataFlow#linked_service}

---

### DataFactoryFlowletDataFlowTransformationDataset <a name="DataFactoryFlowletDataFlowTransformationDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationDataset {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowTransformationFlowlet <a name="DataFactoryFlowletDataFlowTransformationFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationFlowlet {
    string Name,
    string DatasetParameters = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset_parameters DataFactoryFlowletDataFlow#dataset_parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `DatasetParameters`<sup>Optional</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#dataset_parameters DataFactoryFlowletDataFlow#dataset_parameters}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

### DataFactoryFlowletDataFlowTransformationLinkedService <a name="DataFactoryFlowletDataFlowTransformationLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationLinkedService {
    string Name,
    System.Collections.Generic.IDictionary<string, string> Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#name DataFactoryFlowletDataFlow#name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/data_factory_flowlet_data_flow#parameters DataFactoryFlowletDataFlow#parameters}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryFlowletDataFlowSinkDatasetOutputReference <a name="DataFactoryFlowletDataFlowSinkDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSinkDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a>

---


### DataFactoryFlowletDataFlowSinkFlowletOutputReference <a name="DataFactoryFlowletDataFlowSinkFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkFlowletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resetDatasetParameters"></a>

```csharp
private void ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.datasetParametersInput"></a>

```csharp
public string DatasetParametersInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSinkFlowlet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a>

---


### DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSinkLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a>

---


### DataFactoryFlowletDataFlowSinkList <a name="DataFactoryFlowletDataFlowSinkList" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.get"></a>

```csharp
private DataFactoryFlowletDataFlowSinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryFlowletDataFlowSinkOutputReference <a name="DataFactoryFlowletDataFlowSinkOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putRejectedLinkedService">PutRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putSchemaLinkedService">PutSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetRejectedLinkedService">ResetRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetSchemaLinkedService">ResetSchemaLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putDataset"></a>

```csharp
private void PutDataset(DataFactoryFlowletDataFlowSinkDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putFlowlet"></a>

```csharp
private void PutFlowlet(DataFactoryFlowletDataFlowSinkFlowlet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putLinkedService"></a>

```csharp
private void PutLinkedService(DataFactoryFlowletDataFlowSinkLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a>

---

##### `PutRejectedLinkedService` <a name="PutRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putRejectedLinkedService"></a>

```csharp
private void PutRejectedLinkedService(DataFactoryFlowletDataFlowSinkRejectedLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putRejectedLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a>

---

##### `PutSchemaLinkedService` <a name="PutSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putSchemaLinkedService"></a>

```csharp
private void PutSchemaLinkedService(DataFactoryFlowletDataFlowSinkSchemaLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.putSchemaLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetFlowlet"></a>

```csharp
private void ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetLinkedService"></a>

```csharp
private void ResetLinkedService()
```

##### `ResetRejectedLinkedService` <a name="ResetRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetRejectedLinkedService"></a>

```csharp
private void ResetRejectedLinkedService()
```

##### `ResetSchemaLinkedService` <a name="ResetSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.resetSchemaLinkedService"></a>

```csharp
private void ResetSchemaLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference">DataFactoryFlowletDataFlowSinkDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference">DataFactoryFlowletDataFlowSinkFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference">DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference">DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference">DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.rejectedLinkedServiceInput">RejectedLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.schemaLinkedServiceInput">SchemaLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.dataset"></a>

```csharp
public DataFactoryFlowletDataFlowSinkDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDatasetOutputReference">DataFactoryFlowletDataFlowSinkDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.flowlet"></a>

```csharp
public DataFactoryFlowletDataFlowSinkFlowletOutputReference Flowlet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowletOutputReference">DataFactoryFlowletDataFlowSinkFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.linkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference LinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference">DataFactoryFlowletDataFlowSinkLinkedServiceOutputReference</a>

---

##### `RejectedLinkedService`<sup>Required</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.rejectedLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference RejectedLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference">DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference</a>

---

##### `SchemaLinkedService`<sup>Required</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.schemaLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference SchemaLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference">DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.datasetInput"></a>

```csharp
public DataFactoryFlowletDataFlowSinkDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkDataset">DataFactoryFlowletDataFlowSinkDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.flowletInput"></a>

```csharp
public DataFactoryFlowletDataFlowSinkFlowlet FlowletInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkFlowlet">DataFactoryFlowletDataFlowSinkFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.linkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowSinkLinkedService LinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkLinkedService">DataFactoryFlowletDataFlowSinkLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RejectedLinkedServiceInput`<sup>Optional</sup> <a name="RejectedLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.rejectedLinkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowSinkRejectedLinkedService RejectedLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a>

---

##### `SchemaLinkedServiceInput`<sup>Optional</sup> <a name="SchemaLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.schemaLinkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowSinkSchemaLinkedService SchemaLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSinkRejectedLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkRejectedLinkedService">DataFactoryFlowletDataFlowSinkRejectedLinkedService</a>

---


### DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSinkSchemaLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSinkSchemaLinkedService">DataFactoryFlowletDataFlowSinkSchemaLinkedService</a>

---


### DataFactoryFlowletDataFlowSourceDatasetOutputReference <a name="DataFactoryFlowletDataFlowSourceDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSourceDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a>

---


### DataFactoryFlowletDataFlowSourceFlowletOutputReference <a name="DataFactoryFlowletDataFlowSourceFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceFlowletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resetDatasetParameters"></a>

```csharp
private void ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.datasetParametersInput"></a>

```csharp
public string DatasetParametersInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSourceFlowlet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a>

---


### DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSourceLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a>

---


### DataFactoryFlowletDataFlowSourceList <a name="DataFactoryFlowletDataFlowSourceList" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.get"></a>

```csharp
private DataFactoryFlowletDataFlowSourceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryFlowletDataFlowSourceOutputReference <a name="DataFactoryFlowletDataFlowSourceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putRejectedLinkedService">PutRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putSchemaLinkedService">PutSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetRejectedLinkedService">ResetRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetSchemaLinkedService">ResetSchemaLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putDataset"></a>

```csharp
private void PutDataset(DataFactoryFlowletDataFlowSourceDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putFlowlet"></a>

```csharp
private void PutFlowlet(DataFactoryFlowletDataFlowSourceFlowlet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putLinkedService"></a>

```csharp
private void PutLinkedService(DataFactoryFlowletDataFlowSourceLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a>

---

##### `PutRejectedLinkedService` <a name="PutRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putRejectedLinkedService"></a>

```csharp
private void PutRejectedLinkedService(DataFactoryFlowletDataFlowSourceRejectedLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putRejectedLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a>

---

##### `PutSchemaLinkedService` <a name="PutSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putSchemaLinkedService"></a>

```csharp
private void PutSchemaLinkedService(DataFactoryFlowletDataFlowSourceSchemaLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.putSchemaLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetFlowlet"></a>

```csharp
private void ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetLinkedService"></a>

```csharp
private void ResetLinkedService()
```

##### `ResetRejectedLinkedService` <a name="ResetRejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetRejectedLinkedService"></a>

```csharp
private void ResetRejectedLinkedService()
```

##### `ResetSchemaLinkedService` <a name="ResetSchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.resetSchemaLinkedService"></a>

```csharp
private void ResetSchemaLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference">DataFactoryFlowletDataFlowSourceDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference">DataFactoryFlowletDataFlowSourceFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference">DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.rejectedLinkedService">RejectedLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference">DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.schemaLinkedService">SchemaLinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference">DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.rejectedLinkedServiceInput">RejectedLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.schemaLinkedServiceInput">SchemaLinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.dataset"></a>

```csharp
public DataFactoryFlowletDataFlowSourceDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDatasetOutputReference">DataFactoryFlowletDataFlowSourceDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.flowlet"></a>

```csharp
public DataFactoryFlowletDataFlowSourceFlowletOutputReference Flowlet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowletOutputReference">DataFactoryFlowletDataFlowSourceFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.linkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference LinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference">DataFactoryFlowletDataFlowSourceLinkedServiceOutputReference</a>

---

##### `RejectedLinkedService`<sup>Required</sup> <a name="RejectedLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.rejectedLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference RejectedLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference">DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference</a>

---

##### `SchemaLinkedService`<sup>Required</sup> <a name="SchemaLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.schemaLinkedService"></a>

```csharp
public DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference SchemaLinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference">DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.datasetInput"></a>

```csharp
public DataFactoryFlowletDataFlowSourceDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceDataset">DataFactoryFlowletDataFlowSourceDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.flowletInput"></a>

```csharp
public DataFactoryFlowletDataFlowSourceFlowlet FlowletInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceFlowlet">DataFactoryFlowletDataFlowSourceFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.linkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowSourceLinkedService LinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceLinkedService">DataFactoryFlowletDataFlowSourceLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RejectedLinkedServiceInput`<sup>Optional</sup> <a name="RejectedLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.rejectedLinkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowSourceRejectedLinkedService RejectedLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a>

---

##### `SchemaLinkedServiceInput`<sup>Optional</sup> <a name="SchemaLinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.schemaLinkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowSourceSchemaLinkedService SchemaLinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSourceRejectedLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceRejectedLinkedService">DataFactoryFlowletDataFlowSourceRejectedLinkedService</a>

---


### DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowSourceSchemaLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowSourceSchemaLinkedService">DataFactoryFlowletDataFlowSourceSchemaLinkedService</a>

---


### DataFactoryFlowletDataFlowTimeoutsOutputReference <a name="DataFactoryFlowletDataFlowTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryFlowletDataFlowTransformationDatasetOutputReference <a name="DataFactoryFlowletDataFlowTransformationDatasetOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationDatasetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationDataset InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a>

---


### DataFactoryFlowletDataFlowTransformationFlowletOutputReference <a name="DataFactoryFlowletDataFlowTransformationFlowletOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationFlowletOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resetDatasetParameters">ResetDatasetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatasetParameters` <a name="ResetDatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resetDatasetParameters"></a>

```csharp
private void ResetDatasetParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.datasetParametersInput">DatasetParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.datasetParameters">DatasetParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatasetParametersInput`<sup>Optional</sup> <a name="DatasetParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.datasetParametersInput"></a>

```csharp
public string DatasetParametersInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DatasetParameters`<sup>Required</sup> <a name="DatasetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.datasetParameters"></a>

```csharp
public string DatasetParameters { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationFlowlet InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a>

---


### DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference <a name="DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference.property.internalValue"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationLinkedService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a>

---


### DataFactoryFlowletDataFlowTransformationList <a name="DataFactoryFlowletDataFlowTransformationList" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.get"></a>

```csharp
private DataFactoryFlowletDataFlowTransformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataFactoryFlowletDataFlowTransformationOutputReference <a name="DataFactoryFlowletDataFlowTransformationOutputReference" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryFlowletDataFlowTransformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putDataset">PutDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putFlowlet">PutFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putLinkedService">PutLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetFlowlet">ResetFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetLinkedService">ResetLinkedService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataset` <a name="PutDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putDataset"></a>

```csharp
private void PutDataset(DataFactoryFlowletDataFlowTransformationDataset Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putDataset.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a>

---

##### `PutFlowlet` <a name="PutFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putFlowlet"></a>

```csharp
private void PutFlowlet(DataFactoryFlowletDataFlowTransformationFlowlet Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putFlowlet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a>

---

##### `PutLinkedService` <a name="PutLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putLinkedService"></a>

```csharp
private void PutLinkedService(DataFactoryFlowletDataFlowTransformationLinkedService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.putLinkedService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a>

---

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlowlet` <a name="ResetFlowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetFlowlet"></a>

```csharp
private void ResetFlowlet()
```

##### `ResetLinkedService` <a name="ResetLinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.resetLinkedService"></a>

```csharp
private void ResetLinkedService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.dataset">Dataset</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference">DataFactoryFlowletDataFlowTransformationDatasetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.flowlet">Flowlet</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference">DataFactoryFlowletDataFlowTransformationFlowletOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.linkedService">LinkedService</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference">DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.datasetInput">DatasetInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.flowletInput">FlowletInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.linkedServiceInput">LinkedServiceInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.dataset"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationDatasetOutputReference Dataset { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDatasetOutputReference">DataFactoryFlowletDataFlowTransformationDatasetOutputReference</a>

---

##### `Flowlet`<sup>Required</sup> <a name="Flowlet" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.flowlet"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationFlowletOutputReference Flowlet { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowletOutputReference">DataFactoryFlowletDataFlowTransformationFlowletOutputReference</a>

---

##### `LinkedService`<sup>Required</sup> <a name="LinkedService" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.linkedService"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference LinkedService { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference">DataFactoryFlowletDataFlowTransformationLinkedServiceOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.datasetInput"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationDataset DatasetInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationDataset">DataFactoryFlowletDataFlowTransformationDataset</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FlowletInput`<sup>Optional</sup> <a name="FlowletInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.flowletInput"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationFlowlet FlowletInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationFlowlet">DataFactoryFlowletDataFlowTransformationFlowlet</a>

---

##### `LinkedServiceInput`<sup>Optional</sup> <a name="LinkedServiceInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.linkedServiceInput"></a>

```csharp
public DataFactoryFlowletDataFlowTransformationLinkedService LinkedServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationLinkedService">DataFactoryFlowletDataFlowTransformationLinkedService</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryFlowletDataFlow.DataFactoryFlowletDataFlowTransformationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



