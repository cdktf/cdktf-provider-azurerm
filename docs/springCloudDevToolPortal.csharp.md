# `springCloudDevToolPortal` Submodule <a name="`springCloudDevToolPortal` Submodule" id="@cdktf/provider-azurerm.springCloudDevToolPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDevToolPortal <a name="SpringCloudDevToolPortal" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal azurerm_spring_cloud_dev_tool_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDevToolPortal(Construct Scope, string Id, SpringCloudDevToolPortalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig">SpringCloudDevToolPortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig">SpringCloudDevToolPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso">PutSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationAcceleratorEnabled">ResetApplicationAcceleratorEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationLiveViewEnabled">ResetApplicationLiveViewEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetPublicNetworkAccessEnabled">ResetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetSso">ResetSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSso` <a name="PutSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso"></a>

```csharp
private void PutSso(SpringCloudDevToolPortalSso Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putSso.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts"></a>

```csharp
private void PutTimeouts(SpringCloudDevToolPortalTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

---

##### `ResetApplicationAcceleratorEnabled` <a name="ResetApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationAcceleratorEnabled"></a>

```csharp
private void ResetApplicationAcceleratorEnabled()
```

##### `ResetApplicationLiveViewEnabled` <a name="ResetApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetApplicationLiveViewEnabled"></a>

```csharp
private void ResetApplicationLiveViewEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPublicNetworkAccessEnabled` <a name="ResetPublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetPublicNetworkAccessEnabled"></a>

```csharp
private void ResetPublicNetworkAccessEnabled()
```

##### `ResetSso` <a name="ResetSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetSso"></a>

```csharp
private void ResetSso()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudDevToolPortal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDevToolPortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDevToolPortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDevToolPortal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SpringCloudDevToolPortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SpringCloudDevToolPortal resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudDevToolPortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudDevToolPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudDevToolPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.sso">Sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference">SpringCloudDevToolPortalSsoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference">SpringCloudDevToolPortalTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabledInput">ApplicationAcceleratorEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabledInput">ApplicationLiveViewEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabledInput">PublicNetworkAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceIdInput">SpringCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.ssoInput">SsoInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabled">ApplicationAcceleratorEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabled">ApplicationLiveViewEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Sso`<sup>Required</sup> <a name="Sso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.sso"></a>

```csharp
public SpringCloudDevToolPortalSsoOutputReference Sso { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference">SpringCloudDevToolPortalSsoOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeouts"></a>

```csharp
public SpringCloudDevToolPortalTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference">SpringCloudDevToolPortalTimeoutsOutputReference</a>

---

##### `ApplicationAcceleratorEnabledInput`<sup>Optional</sup> <a name="ApplicationAcceleratorEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabledInput"></a>

```csharp
public object ApplicationAcceleratorEnabledInput { get; }
```

- *Type:* object

---

##### `ApplicationLiveViewEnabledInput`<sup>Optional</sup> <a name="ApplicationLiveViewEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabledInput"></a>

```csharp
public object ApplicationLiveViewEnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="PublicNetworkAccessEnabledInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabledInput"></a>

```csharp
public object PublicNetworkAccessEnabledInput { get; }
```

- *Type:* object

---

##### `SpringCloudServiceIdInput`<sup>Optional</sup> <a name="SpringCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceIdInput"></a>

```csharp
public string SpringCloudServiceIdInput { get; }
```

- *Type:* string

---

##### `SsoInput`<sup>Optional</sup> <a name="SsoInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.ssoInput"></a>

```csharp
public SpringCloudDevToolPortalSso SsoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationAcceleratorEnabled`<sup>Required</sup> <a name="ApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationAcceleratorEnabled"></a>

```csharp
public object ApplicationAcceleratorEnabled { get; }
```

- *Type:* object

---

##### `ApplicationLiveViewEnabled`<sup>Required</sup> <a name="ApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.applicationLiveViewEnabled"></a>

```csharp
public object ApplicationLiveViewEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; }
```

- *Type:* object

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDevToolPortalConfig <a name="SpringCloudDevToolPortalConfig" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDevToolPortalConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SpringCloudServiceId,
    object ApplicationAcceleratorEnabled = null,
    object ApplicationLiveViewEnabled = null,
    string Id = null,
    object PublicNetworkAccessEnabled = null,
    SpringCloudDevToolPortalSso Sso = null,
    SpringCloudDevToolPortalTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.springCloudServiceId">SpringCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationAcceleratorEnabled">ApplicationAcceleratorEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationLiveViewEnabled">ApplicationLiveViewEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.sso">Sso</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | sso block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}.

---

##### `SpringCloudServiceId`<sup>Required</sup> <a name="SpringCloudServiceId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.springCloudServiceId"></a>

```csharp
public string SpringCloudServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}.

---

##### `ApplicationAcceleratorEnabled`<sup>Optional</sup> <a name="ApplicationAcceleratorEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationAcceleratorEnabled"></a>

```csharp
public object ApplicationAcceleratorEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}.

---

##### `ApplicationLiveViewEnabled`<sup>Optional</sup> <a name="ApplicationLiveViewEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.applicationLiveViewEnabled"></a>

```csharp
public object ApplicationLiveViewEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicNetworkAccessEnabled`<sup>Optional</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.publicNetworkAccessEnabled"></a>

```csharp
public object PublicNetworkAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}.

---

##### `Sso`<sup>Optional</sup> <a name="Sso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.sso"></a>

```csharp
public SpringCloudDevToolPortalSso Sso { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

sso block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#sso SpringCloudDevToolPortal#sso}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalConfig.property.timeouts"></a>

```csharp
public SpringCloudDevToolPortalTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts">SpringCloudDevToolPortalTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#timeouts SpringCloudDevToolPortal#timeouts}

---

### SpringCloudDevToolPortalSso <a name="SpringCloudDevToolPortalSso" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDevToolPortalSso {
    string ClientId = null,
    string ClientSecret = null,
    string MetadataUrl = null,
    string[] Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.metadataUrl">MetadataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.scope">Scope</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}.

---

##### `MetadataUrl`<sup>Optional</sup> <a name="MetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.metadataUrl"></a>

```csharp
public string MetadataUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso.property.scope"></a>

```csharp
public string[] Scope { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}.

---

### SpringCloudDevToolPortalTimeouts <a name="SpringCloudDevToolPortalTimeouts" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDevToolPortalTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDevToolPortalSsoOutputReference <a name="SpringCloudDevToolPortalSsoOutputReference" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDevToolPortalSsoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetMetadataUrl">ResetMetadataUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetMetadataUrl` <a name="ResetMetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetMetadataUrl"></a>

```csharp
private void ResetMetadataUrl()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrlInput">MetadataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrl">MetadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scope">Scope</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `MetadataUrlInput`<sup>Optional</sup> <a name="MetadataUrlInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrlInput"></a>

```csharp
public string MetadataUrlInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scopeInput"></a>

```csharp
public string[] ScopeInput { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.metadataUrl"></a>

```csharp
public string MetadataUrl { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.scope"></a>

```csharp
public string[] Scope { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSsoOutputReference.property.internalValue"></a>

```csharp
public SpringCloudDevToolPortalSso InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalSso">SpringCloudDevToolPortalSso</a>

---


### SpringCloudDevToolPortalTimeoutsOutputReference <a name="SpringCloudDevToolPortalTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SpringCloudDevToolPortalTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudDevToolPortal.SpringCloudDevToolPortalTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



