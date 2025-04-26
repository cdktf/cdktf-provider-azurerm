# `streamAnalyticsJobStorageAccount` Submodule <a name="`streamAnalyticsJobStorageAccount` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsJobStorageAccount <a name="StreamAnalyticsJobStorageAccount" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account azurerm_stream_analytics_job_storage_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobStorageAccount(Construct Scope, string Id, StreamAnalyticsJobStorageAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig">StreamAnalyticsJobStorageAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig">StreamAnalyticsJobStorageAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetStorageAccountKey">ResetStorageAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(StreamAnalyticsJobStorageAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStorageAccountKey` <a name="ResetStorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetStorageAccountKey"></a>

```csharp
private void ResetStorageAccountKey()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsJobStorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJobStorageAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJobStorageAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJobStorageAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

StreamAnalyticsJobStorageAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StreamAnalyticsJobStorageAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamAnalyticsJobStorageAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamAnalyticsJobStorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsJobStorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference">StreamAnalyticsJobStorageAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKeyInput">StorageAccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobIdInput">StreamAnalyticsJobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeouts"></a>

```csharp
public StreamAnalyticsJobStorageAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference">StreamAnalyticsJobStorageAccountTimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StorageAccountKeyInput`<sup>Optional</sup> <a name="StorageAccountKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKeyInput"></a>

```csharp
public string StorageAccountKeyInput { get; }
```

- *Type:* string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountNameInput"></a>

```csharp
public string StorageAccountNameInput { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobIdInput`<sup>Optional</sup> <a name="StreamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobIdInput"></a>

```csharp
public string StreamAnalyticsJobIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageAccountKey`<sup>Required</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; }
```

- *Type:* string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; }
```

- *Type:* string

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.streamAnalyticsJobId"></a>

```csharp
public string StreamAnalyticsJobId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsJobStorageAccountConfig <a name="StreamAnalyticsJobStorageAccountConfig" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobStorageAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthenticationMode,
    string StorageAccountName,
    string StreamAnalyticsJobId,
    string Id = null,
    string StorageAccountKey = null,
    StreamAnalyticsJobStorageAccountTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#authentication_mode StreamAnalyticsJobStorageAccount#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountName">StorageAccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#storage_account_name StreamAnalyticsJobStorageAccount#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#stream_analytics_job_id StreamAnalyticsJobStorageAccount#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#id StreamAnalyticsJobStorageAccount#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountKey">StorageAccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#storage_account_key StreamAnalyticsJobStorageAccount#storage_account_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#authentication_mode StreamAnalyticsJobStorageAccount#authentication_mode}.

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountName"></a>

```csharp
public string StorageAccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#storage_account_name StreamAnalyticsJobStorageAccount#storage_account_name}.

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.streamAnalyticsJobId"></a>

```csharp
public string StreamAnalyticsJobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#stream_analytics_job_id StreamAnalyticsJobStorageAccount#stream_analytics_job_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#id StreamAnalyticsJobStorageAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `StorageAccountKey`<sup>Optional</sup> <a name="StorageAccountKey" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.storageAccountKey"></a>

```csharp
public string StorageAccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#storage_account_key StreamAnalyticsJobStorageAccount#storage_account_key}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountConfig.property.timeouts"></a>

```csharp
public StreamAnalyticsJobStorageAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts">StreamAnalyticsJobStorageAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#timeouts StreamAnalyticsJobStorageAccount#timeouts}

---

### StreamAnalyticsJobStorageAccountTimeouts <a name="StreamAnalyticsJobStorageAccountTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobStorageAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#create StreamAnalyticsJobStorageAccount#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#delete StreamAnalyticsJobStorageAccount#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#read StreamAnalyticsJobStorageAccount#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#update StreamAnalyticsJobStorageAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#create StreamAnalyticsJobStorageAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#delete StreamAnalyticsJobStorageAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#read StreamAnalyticsJobStorageAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/resources/stream_analytics_job_storage_account#update StreamAnalyticsJobStorageAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsJobStorageAccountTimeoutsOutputReference <a name="StreamAnalyticsJobStorageAccountTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new StreamAnalyticsJobStorageAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsJobStorageAccount.StreamAnalyticsJobStorageAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



