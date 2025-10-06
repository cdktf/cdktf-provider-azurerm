# `streamAnalyticsFunctionJavascriptUda` Submodule <a name="`streamAnalyticsFunctionJavascriptUda` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsFunctionJavascriptUda <a name="StreamAnalyticsFunctionJavascriptUda" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda azurerm_stream_analytics_function_javascript_uda}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUda(Construct Scope, string Id, StreamAnalyticsFunctionJavascriptUdaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig">StreamAnalyticsFunctionJavascriptUdaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig">StreamAnalyticsFunctionJavascriptUdaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput"></a>

```csharp
private void PutInput(IResolvable|StreamAnalyticsFunctionJavascriptUdaInput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putInput.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput"></a>

```csharp
private void PutOutput(StreamAnalyticsFunctionJavascriptUdaOutput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsFunctionJavascriptUdaTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUda resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsFunctionJavascriptUda.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsFunctionJavascriptUda.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsFunctionJavascriptUda.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsFunctionJavascriptUda.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsFunctionJavascriptUda resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsFunctionJavascriptUda to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsFunctionJavascriptUda that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsFunctionJavascriptUda to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.input">Input</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList">StreamAnalyticsFunctionJavascriptUdaInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.output">Output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference">StreamAnalyticsFunctionJavascriptUdaOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.inputInput">InputInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.outputInput">OutputInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobIdInput">StreamAnalyticsJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.input"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaInputList Input { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList">StreamAnalyticsFunctionJavascriptUdaInputList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.output"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaOutputOutputReference Output { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference">StreamAnalyticsFunctionJavascriptUdaOutputOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeouts"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference">StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.inputInput"></a>

```csharp
public IResolvable|StreamAnalyticsFunctionJavascriptUdaInput[] InputInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.outputInput"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaOutput OutputInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobIdInput`<sup>Optional</sup> <a name="StreamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobIdInput"></a>

```csharp
public string StreamAnalyticsJobIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.timeoutsInput"></a>

```csharp
public IResolvable|StreamAnalyticsFunctionJavascriptUdaTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.streamAnalyticsJobId"></a>

```csharp
public string StreamAnalyticsJobId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUda.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsFunctionJavascriptUdaConfig <a name="StreamAnalyticsFunctionJavascriptUdaConfig" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|StreamAnalyticsFunctionJavascriptUdaInput[] Input,
    string Name,
    StreamAnalyticsFunctionJavascriptUdaOutput Output,
    string Script,
    string StreamAnalyticsJobId,
    string Id = null,
    StreamAnalyticsFunctionJavascriptUdaTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.input">Input</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]</code> | input block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.output">Output</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | output block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.input"></a>

```csharp
public IResolvable|StreamAnalyticsFunctionJavascriptUdaInput[] Input { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]

input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#input StreamAnalyticsFunctionJavascriptUda#input}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#name StreamAnalyticsFunctionJavascriptUda#name}.

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.output"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaOutput Output { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#output StreamAnalyticsFunctionJavascriptUda#output}

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#script StreamAnalyticsFunctionJavascriptUda#script}.

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.streamAnalyticsJobId"></a>

```csharp
public string StreamAnalyticsJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#stream_analytics_job_id StreamAnalyticsFunctionJavascriptUda#stream_analytics_job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#id StreamAnalyticsFunctionJavascriptUda#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#timeouts StreamAnalyticsFunctionJavascriptUda#timeouts}

---

### StreamAnalyticsFunctionJavascriptUdaInput <a name="StreamAnalyticsFunctionJavascriptUdaInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaInput {
    string Type,
    bool|IResolvable ConfigurationParameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.configurationParameter">ConfigurationParameter</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#configuration_parameter StreamAnalyticsFunctionJavascriptUda#configuration_parameter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

##### `ConfigurationParameter`<sup>Optional</sup> <a name="ConfigurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput.property.configurationParameter"></a>

```csharp
public bool|IResolvable ConfigurationParameter { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#configuration_parameter StreamAnalyticsFunctionJavascriptUda#configuration_parameter}.

---

### StreamAnalyticsFunctionJavascriptUdaOutput <a name="StreamAnalyticsFunctionJavascriptUdaOutput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaOutput {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#type StreamAnalyticsFunctionJavascriptUda#type}.

---

### StreamAnalyticsFunctionJavascriptUdaTimeouts <a name="StreamAnalyticsFunctionJavascriptUdaTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#create StreamAnalyticsFunctionJavascriptUda#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#delete StreamAnalyticsFunctionJavascriptUda#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#read StreamAnalyticsFunctionJavascriptUda#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/stream_analytics_function_javascript_uda#update StreamAnalyticsFunctionJavascriptUda#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsFunctionJavascriptUdaInputList <a name="StreamAnalyticsFunctionJavascriptUdaInputList" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get"></a>

```csharp
private StreamAnalyticsFunctionJavascriptUdaInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputList.property.internalValue"></a>

```csharp
public IResolvable|StreamAnalyticsFunctionJavascriptUdaInput[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>[]

---


### StreamAnalyticsFunctionJavascriptUdaInputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaInputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resetConfigurationParameter">ResetConfigurationParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigurationParameter` <a name="ResetConfigurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.resetConfigurationParameter"></a>

```csharp
private void ResetConfigurationParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameterInput">ConfigurationParameterInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameter">ConfigurationParameter</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationParameterInput`<sup>Optional</sup> <a name="ConfigurationParameterInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameterInput"></a>

```csharp
public bool|IResolvable ConfigurationParameterInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ConfigurationParameter`<sup>Required</sup> <a name="ConfigurationParameter" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.configurationParameter"></a>

```csharp
public bool|IResolvable ConfigurationParameter { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StreamAnalyticsFunctionJavascriptUdaInput InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaInput">StreamAnalyticsFunctionJavascriptUdaInput</a>

---


### StreamAnalyticsFunctionJavascriptUdaOutputOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaOutputOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutputOutputReference.property.internalValue"></a>

```csharp
public StreamAnalyticsFunctionJavascriptUdaOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaOutput">StreamAnalyticsFunctionJavascriptUdaOutput</a>

---


### StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference <a name="StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StreamAnalyticsFunctionJavascriptUdaTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.streamAnalyticsFunctionJavascriptUda.StreamAnalyticsFunctionJavascriptUdaTimeouts">StreamAnalyticsFunctionJavascriptUdaTimeouts</a>

---



