# `webPubsubHub` Submodule <a name="`webPubsubHub` Submodule" id="@cdktf/provider-azurerm.webPubsubHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubHub <a name="WebPubsubHub" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub azurerm_web_pubsub_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHub(Construct Scope, string Id, WebPubsubHubConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig">WebPubsubHubConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig">WebPubsubHubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler">PutEventHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener">PutEventListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled">ResetAnonymousConnectionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler">ResetEventHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener">ResetEventListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventHandler` <a name="PutEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler"></a>

```csharp
private void PutEventHandler(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler.parameter.value"></a>

- *Type:* object

---

##### `PutEventListener` <a name="PutEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener"></a>

```csharp
private void PutEventListener(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts"></a>

```csharp
private void PutTimeouts(WebPubsubHubTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

---

##### `ResetAnonymousConnectionsEnabled` <a name="ResetAnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled"></a>

```csharp
private void ResetAnonymousConnectionsEnabled()
```

##### `ResetEventHandler` <a name="ResetEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler"></a>

```csharp
private void ResetEventHandler()
```

##### `ResetEventListener` <a name="ResetEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener"></a>

```csharp
private void ResetEventListener()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WebPubsubHub resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubHub.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubHub.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubHub.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

WebPubsubHub.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WebPubsubHub resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebPubsubHub to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebPubsubHub that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubHub to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler">EventHandler</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener">EventListener</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput">AnonymousConnectionsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput">EventHandlerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput">EventListenerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput">WebPubsubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled">AnonymousConnectionsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId">WebPubsubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EventHandler`<sup>Required</sup> <a name="EventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler"></a>

```csharp
public WebPubsubHubEventHandlerList EventHandler { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a>

---

##### `EventListener`<sup>Required</sup> <a name="EventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener"></a>

```csharp
public WebPubsubHubEventListenerList EventListener { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts"></a>

```csharp
public WebPubsubHubTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a>

---

##### `AnonymousConnectionsEnabledInput`<sup>Optional</sup> <a name="AnonymousConnectionsEnabledInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput"></a>

```csharp
public object AnonymousConnectionsEnabledInput { get; }
```

- *Type:* object

---

##### `EventHandlerInput`<sup>Optional</sup> <a name="EventHandlerInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput"></a>

```csharp
public object EventHandlerInput { get; }
```

- *Type:* object

---

##### `EventListenerInput`<sup>Optional</sup> <a name="EventListenerInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput"></a>

```csharp
public object EventListenerInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebPubsubIdInput`<sup>Optional</sup> <a name="WebPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput"></a>

```csharp
public string WebPubsubIdInput { get; }
```

- *Type:* string

---

##### `AnonymousConnectionsEnabled`<sup>Required</sup> <a name="AnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled"></a>

```csharp
public object AnonymousConnectionsEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId"></a>

```csharp
public string WebPubsubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubHubConfig <a name="WebPubsubHubConfig" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string WebPubsubId,
    object AnonymousConnectionsEnabled = null,
    object EventHandler = null,
    object EventListener = null,
    string Id = null,
    WebPubsubHubTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId">WebPubsubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled">AnonymousConnectionsEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler">EventHandler</a></code> | <code>object</code> | event_handler block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener">EventListener</a></code> | <code>object</code> | event_listener block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}.

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId"></a>

```csharp
public string WebPubsubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}.

---

##### `AnonymousConnectionsEnabled`<sup>Optional</sup> <a name="AnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled"></a>

```csharp
public object AnonymousConnectionsEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}.

---

##### `EventHandler`<sup>Optional</sup> <a name="EventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler"></a>

```csharp
public object EventHandler { get; set; }
```

- *Type:* object

event_handler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}

---

##### `EventListener`<sup>Optional</sup> <a name="EventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener"></a>

```csharp
public object EventListener { get; set; }
```

- *Type:* object

event_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts"></a>

```csharp
public WebPubsubHubTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}

---

### WebPubsubHubEventHandler <a name="WebPubsubHubEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventHandler {
    string UrlTemplate,
    WebPubsubHubEventHandlerAuth Auth = null,
    string[] SystemEvents = null,
    string UserEventPattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate">UrlTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents">SystemEvents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern">UserEventPattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}. |

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate"></a>

```csharp
public string UrlTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}.

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth"></a>

```csharp
public WebPubsubHubEventHandlerAuth Auth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#auth WebPubsubHub#auth}

---

##### `SystemEvents`<sup>Optional</sup> <a name="SystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents"></a>

```csharp
public string[] SystemEvents { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}.

---

##### `UserEventPattern`<sup>Optional</sup> <a name="UserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern"></a>

```csharp
public string UserEventPattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}.

---

### WebPubsubHubEventHandlerAuth <a name="WebPubsubHubEventHandlerAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventHandlerAuth {
    string ManagedIdentityId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}. |

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}.

---

### WebPubsubHubEventListener <a name="WebPubsubHubEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventListener {
    string EventhubName,
    string EventhubNamespaceName,
    string[] SystemEventNameFilter = null,
    string[] UserEventNameFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName">EventhubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName">EventhubNamespaceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter">SystemEventNameFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter">UserEventNameFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}. |

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName"></a>

```csharp
public string EventhubName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}.

---

##### `EventhubNamespaceName`<sup>Required</sup> <a name="EventhubNamespaceName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName"></a>

```csharp
public string EventhubNamespaceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}.

---

##### `SystemEventNameFilter`<sup>Optional</sup> <a name="SystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter"></a>

```csharp
public string[] SystemEventNameFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}.

---

##### `UserEventNameFilter`<sup>Optional</sup> <a name="UserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter"></a>

```csharp
public string[] UserEventNameFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}.

---

### WebPubsubHubTimeouts <a name="WebPubsubHubTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubHubEventHandlerAuthOutputReference <a name="WebPubsubHubEventHandlerAuthOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventHandlerAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput">ManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedIdentityIdInput`<sup>Optional</sup> <a name="ManagedIdentityIdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput"></a>

```csharp
public string ManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue"></a>

```csharp
public WebPubsubHubEventHandlerAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---


### WebPubsubHubEventHandlerList <a name="WebPubsubHubEventHandlerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventHandlerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get"></a>

```csharp
private WebPubsubHubEventHandlerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebPubsubHubEventHandlerOutputReference <a name="WebPubsubHubEventHandlerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventHandlerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents">ResetSystemEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern">ResetUserEventPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth"></a>

```csharp
private void PutAuth(WebPubsubHubEventHandlerAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth"></a>

```csharp
private void ResetAuth()
```

##### `ResetSystemEvents` <a name="ResetSystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents"></a>

```csharp
private void ResetSystemEvents()
```

##### `ResetUserEventPattern` <a name="ResetUserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern"></a>

```csharp
private void ResetUserEventPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput">SystemEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput">UrlTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput">UserEventPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents">SystemEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate">UrlTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern">UserEventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth"></a>

```csharp
public WebPubsubHubEventHandlerAuthOutputReference Auth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput"></a>

```csharp
public WebPubsubHubEventHandlerAuth AuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `SystemEventsInput`<sup>Optional</sup> <a name="SystemEventsInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput"></a>

```csharp
public string[] SystemEventsInput { get; }
```

- *Type:* string[]

---

##### `UrlTemplateInput`<sup>Optional</sup> <a name="UrlTemplateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput"></a>

```csharp
public string UrlTemplateInput { get; }
```

- *Type:* string

---

##### `UserEventPatternInput`<sup>Optional</sup> <a name="UserEventPatternInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput"></a>

```csharp
public string UserEventPatternInput { get; }
```

- *Type:* string

---

##### `SystemEvents`<sup>Required</sup> <a name="SystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents"></a>

```csharp
public string[] SystemEvents { get; }
```

- *Type:* string[]

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate"></a>

```csharp
public string UrlTemplate { get; }
```

- *Type:* string

---

##### `UserEventPattern`<sup>Required</sup> <a name="UserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern"></a>

```csharp
public string UserEventPattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebPubsubHubEventListenerList <a name="WebPubsubHubEventListenerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventListenerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get"></a>

```csharp
private WebPubsubHubEventListenerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebPubsubHubEventListenerOutputReference <a name="WebPubsubHubEventListenerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubEventListenerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter">ResetSystemEventNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter">ResetUserEventNameFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemEventNameFilter` <a name="ResetSystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter"></a>

```csharp
private void ResetSystemEventNameFilter()
```

##### `ResetUserEventNameFilter` <a name="ResetUserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter"></a>

```csharp
private void ResetUserEventNameFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput">EventhubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput">EventhubNamespaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput">SystemEventNameFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput">UserEventNameFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName">EventhubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName">EventhubNamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter">SystemEventNameFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter">UserEventNameFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput"></a>

```csharp
public string EventhubNameInput { get; }
```

- *Type:* string

---

##### `EventhubNamespaceNameInput`<sup>Optional</sup> <a name="EventhubNamespaceNameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput"></a>

```csharp
public string EventhubNamespaceNameInput { get; }
```

- *Type:* string

---

##### `SystemEventNameFilterInput`<sup>Optional</sup> <a name="SystemEventNameFilterInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput"></a>

```csharp
public string[] SystemEventNameFilterInput { get; }
```

- *Type:* string[]

---

##### `UserEventNameFilterInput`<sup>Optional</sup> <a name="UserEventNameFilterInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput"></a>

```csharp
public string[] UserEventNameFilterInput { get; }
```

- *Type:* string[]

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName"></a>

```csharp
public string EventhubName { get; }
```

- *Type:* string

---

##### `EventhubNamespaceName`<sup>Required</sup> <a name="EventhubNamespaceName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName"></a>

```csharp
public string EventhubNamespaceName { get; }
```

- *Type:* string

---

##### `SystemEventNameFilter`<sup>Required</sup> <a name="SystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter"></a>

```csharp
public string[] SystemEventNameFilter { get; }
```

- *Type:* string[]

---

##### `UserEventNameFilter`<sup>Required</sup> <a name="UserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter"></a>

```csharp
public string[] UserEventNameFilter { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WebPubsubHubTimeoutsOutputReference <a name="WebPubsubHubTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new WebPubsubHubTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



