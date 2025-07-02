# `mobileNetworkService` Submodule <a name="`mobileNetworkService` Submodule" id="@cdktf/provider-azurerm.mobileNetworkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkService <a name="MobileNetworkService" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service azurerm_mobile_network_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkService(Construct Scope, string Id, MobileNetworkServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig">MobileNetworkServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig">MobileNetworkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putPccRule">PutPccRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putServiceQosPolicy">PutServiceQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetServiceQosPolicy">ResetServiceQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPccRule` <a name="PutPccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putPccRule"></a>

```csharp
private void PutPccRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putPccRule.parameter.value"></a>

- *Type:* object

---

##### `PutServiceQosPolicy` <a name="PutServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putServiceQosPolicy"></a>

```csharp
private void PutServiceQosPolicy(MobileNetworkServiceServiceQosPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putServiceQosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putTimeouts"></a>

```csharp
private void PutTimeouts(MobileNetworkServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServiceQosPolicy` <a name="ResetServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetServiceQosPolicy"></a>

```csharp
private void ResetServiceQosPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

MobileNetworkService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MobileNetworkService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRule">PccRule</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList">MobileNetworkServicePccRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicy">ServiceQosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference">MobileNetworkServiceServiceQosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference">MobileNetworkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkIdInput">MobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRuleInput">PccRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedenceInput">ServicePrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicyInput">ServiceQosPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkId">MobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedence">ServicePrecedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PccRule`<sup>Required</sup> <a name="PccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRule"></a>

```csharp
public MobileNetworkServicePccRuleList PccRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList">MobileNetworkServicePccRuleList</a>

---

##### `ServiceQosPolicy`<sup>Required</sup> <a name="ServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicy"></a>

```csharp
public MobileNetworkServiceServiceQosPolicyOutputReference ServiceQosPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference">MobileNetworkServiceServiceQosPolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeouts"></a>

```csharp
public MobileNetworkServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference">MobileNetworkServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MobileNetworkIdInput`<sup>Optional</sup> <a name="MobileNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkIdInput"></a>

```csharp
public string MobileNetworkIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PccRuleInput`<sup>Optional</sup> <a name="PccRuleInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.pccRuleInput"></a>

```csharp
public object PccRuleInput { get; }
```

- *Type:* object

---

##### `ServicePrecedenceInput`<sup>Optional</sup> <a name="ServicePrecedenceInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedenceInput"></a>

```csharp
public double ServicePrecedenceInput { get; }
```

- *Type:* double

---

##### `ServiceQosPolicyInput`<sup>Optional</sup> <a name="ServiceQosPolicyInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.serviceQosPolicyInput"></a>

```csharp
public MobileNetworkServiceServiceQosPolicy ServiceQosPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.mobileNetworkId"></a>

```csharp
public string MobileNetworkId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServicePrecedence`<sup>Required</sup> <a name="ServicePrecedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.servicePrecedence"></a>

```csharp
public double ServicePrecedence { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkServiceConfig <a name="MobileNetworkServiceConfig" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string MobileNetworkId,
    string Name,
    object PccRule,
    double ServicePrecedence,
    string Id = null,
    MobileNetworkServiceServiceQosPolicy ServiceQosPolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MobileNetworkServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#location MobileNetworkService#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.mobileNetworkId">MobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.pccRule">PccRule</a></code> | <code>object</code> | pcc_rule block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.servicePrecedence">ServicePrecedence</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#id MobileNetworkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.serviceQosPolicy">ServiceQosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | service_qos_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#location MobileNetworkService#location}.

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.mobileNetworkId"></a>

```csharp
public string MobileNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#mobile_network_id MobileNetworkService#mobile_network_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `PccRule`<sup>Required</sup> <a name="PccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.pccRule"></a>

```csharp
public object PccRule { get; set; }
```

- *Type:* object

pcc_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#pcc_rule MobileNetworkService#pcc_rule}

---

##### `ServicePrecedence`<sup>Required</sup> <a name="ServicePrecedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.servicePrecedence"></a>

```csharp
public double ServicePrecedence { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#service_precedence MobileNetworkService#service_precedence}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#id MobileNetworkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceQosPolicy`<sup>Optional</sup> <a name="ServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.serviceQosPolicy"></a>

```csharp
public MobileNetworkServiceServiceQosPolicy ServiceQosPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

service_qos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#service_qos_policy MobileNetworkService#service_qos_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#tags MobileNetworkService#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceConfig.property.timeouts"></a>

```csharp
public MobileNetworkServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts">MobileNetworkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#timeouts MobileNetworkService#timeouts}

---

### MobileNetworkServicePccRule <a name="MobileNetworkServicePccRule" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRule {
    string Name,
    double Precedence,
    object ServiceDataFlowTemplate,
    MobileNetworkServicePccRuleQosPolicy QosPolicy = null,
    object TrafficControlEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.precedence">Precedence</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#precedence MobileNetworkService#precedence}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.serviceDataFlowTemplate">ServiceDataFlowTemplate</a></code> | <code>object</code> | service_data_flow_template block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.qosPolicy">QosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a></code> | qos_policy block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.trafficControlEnabled">TrafficControlEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#traffic_control_enabled MobileNetworkService#traffic_control_enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.precedence"></a>

```csharp
public double Precedence { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#precedence MobileNetworkService#precedence}.

---

##### `ServiceDataFlowTemplate`<sup>Required</sup> <a name="ServiceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.serviceDataFlowTemplate"></a>

```csharp
public object ServiceDataFlowTemplate { get; set; }
```

- *Type:* object

service_data_flow_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#service_data_flow_template MobileNetworkService#service_data_flow_template}

---

##### `QosPolicy`<sup>Optional</sup> <a name="QosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.qosPolicy"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicy QosPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

qos_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#qos_policy MobileNetworkService#qos_policy}

---

##### `TrafficControlEnabled`<sup>Optional</sup> <a name="TrafficControlEnabled" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRule.property.trafficControlEnabled"></a>

```csharp
public object TrafficControlEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#traffic_control_enabled MobileNetworkService#traffic_control_enabled}.

---

### MobileNetworkServicePccRuleQosPolicy <a name="MobileNetworkServicePccRuleQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleQosPolicy {
    MobileNetworkServicePccRuleQosPolicyMaximumBitRate MaximumBitRate,
    double QosIndicator,
    double AllocationAndRetentionPriorityLevel = null,
    MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate GuaranteedBitRate = null,
    string PreemptionCapability = null,
    string PreemptionVulnerability = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.maximumBitRate">MaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.qosIndicator">QosIndicator</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.guaranteedBitRate">GuaranteedBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | guaranteed_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionCapability">PreemptionCapability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}. |

---

##### `MaximumBitRate`<sup>Required</sup> <a name="MaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.maximumBitRate"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyMaximumBitRate MaximumBitRate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#maximum_bit_rate MobileNetworkService#maximum_bit_rate}

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.qosIndicator"></a>

```csharp
public double QosIndicator { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}.

---

##### `AllocationAndRetentionPriorityLevel`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.allocationAndRetentionPriorityLevel"></a>

```csharp
public double AllocationAndRetentionPriorityLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}.

---

##### `GuaranteedBitRate`<sup>Optional</sup> <a name="GuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.guaranteedBitRate"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate GuaranteedBitRate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

guaranteed_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#guaranteed_bit_rate MobileNetworkService#guaranteed_bit_rate}

---

##### `PreemptionCapability`<sup>Optional</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionCapability"></a>

```csharp
public string PreemptionCapability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}.

---

##### `PreemptionVulnerability`<sup>Optional</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy.property.preemptionVulnerability"></a>

```csharp
public string PreemptionVulnerability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}.

---

### MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate <a name="MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate {
    string Downlink,
    string Uplink
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.downlink">Downlink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.uplink">Uplink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.downlink"></a>

```csharp
public string Downlink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate.property.uplink"></a>

```csharp
public string Uplink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}.

---

### MobileNetworkServicePccRuleQosPolicyMaximumBitRate <a name="MobileNetworkServicePccRuleQosPolicyMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleQosPolicyMaximumBitRate {
    string Downlink,
    string Uplink
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.downlink">Downlink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.uplink">Uplink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.downlink"></a>

```csharp
public string Downlink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate.property.uplink"></a>

```csharp
public string Uplink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}.

---

### MobileNetworkServicePccRuleServiceDataFlowTemplate <a name="MobileNetworkServicePccRuleServiceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleServiceDataFlowTemplate {
    string Direction,
    string Name,
    string[] Protocol,
    string[] RemoteIpList,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#direction MobileNetworkService#direction}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#name MobileNetworkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.protocol">Protocol</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#protocol MobileNetworkService#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.remoteIpList">RemoteIpList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#remote_ip_list MobileNetworkService#remote_ip_list}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.ports">Ports</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#ports MobileNetworkService#ports}. |

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#direction MobileNetworkService#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#name MobileNetworkService#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.protocol"></a>

```csharp
public string[] Protocol { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#protocol MobileNetworkService#protocol}.

---

##### `RemoteIpList`<sup>Required</sup> <a name="RemoteIpList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.remoteIpList"></a>

```csharp
public string[] RemoteIpList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#remote_ip_list MobileNetworkService#remote_ip_list}.

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplate.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#ports MobileNetworkService#ports}.

---

### MobileNetworkServiceServiceQosPolicy <a name="MobileNetworkServiceServiceQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceServiceQosPolicy {
    MobileNetworkServiceServiceQosPolicyMaximumBitRate MaximumBitRate,
    double AllocationAndRetentionPriorityLevel = null,
    string PreemptionCapability = null,
    string PreemptionVulnerability = null,
    double QosIndicator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.maximumBitRate">MaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | maximum_bit_rate block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionCapability">PreemptionCapability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.qosIndicator">QosIndicator</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}. |

---

##### `MaximumBitRate`<sup>Required</sup> <a name="MaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.maximumBitRate"></a>

```csharp
public MobileNetworkServiceServiceQosPolicyMaximumBitRate MaximumBitRate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

maximum_bit_rate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#maximum_bit_rate MobileNetworkService#maximum_bit_rate}

---

##### `AllocationAndRetentionPriorityLevel`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.allocationAndRetentionPriorityLevel"></a>

```csharp
public double AllocationAndRetentionPriorityLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#allocation_and_retention_priority_level MobileNetworkService#allocation_and_retention_priority_level}.

---

##### `PreemptionCapability`<sup>Optional</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionCapability"></a>

```csharp
public string PreemptionCapability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_capability MobileNetworkService#preemption_capability}.

---

##### `PreemptionVulnerability`<sup>Optional</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.preemptionVulnerability"></a>

```csharp
public string PreemptionVulnerability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#preemption_vulnerability MobileNetworkService#preemption_vulnerability}.

---

##### `QosIndicator`<sup>Optional</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy.property.qosIndicator"></a>

```csharp
public double QosIndicator { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#qos_indicator MobileNetworkService#qos_indicator}.

---

### MobileNetworkServiceServiceQosPolicyMaximumBitRate <a name="MobileNetworkServiceServiceQosPolicyMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceServiceQosPolicyMaximumBitRate {
    string Downlink,
    string Uplink
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.downlink">Downlink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.uplink">Uplink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}. |

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.downlink"></a>

```csharp
public string Downlink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#downlink MobileNetworkService#downlink}.

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate.property.uplink"></a>

```csharp
public string Uplink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#uplink MobileNetworkService#uplink}.

---

### MobileNetworkServiceTimeouts <a name="MobileNetworkServiceTimeouts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#create MobileNetworkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#delete MobileNetworkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#read MobileNetworkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#update MobileNetworkService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#create MobileNetworkService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#delete MobileNetworkService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#read MobileNetworkService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/mobile_network_service#update MobileNetworkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkServicePccRuleList <a name="MobileNetworkServicePccRuleList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.get"></a>

```csharp
private MobileNetworkServicePccRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkServicePccRuleOutputReference <a name="MobileNetworkServicePccRuleOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putQosPolicy">PutQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putServiceDataFlowTemplate">PutServiceDataFlowTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetQosPolicy">ResetQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetTrafficControlEnabled">ResetTrafficControlEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutQosPolicy` <a name="PutQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putQosPolicy"></a>

```csharp
private void PutQosPolicy(MobileNetworkServicePccRuleQosPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putQosPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

---

##### `PutServiceDataFlowTemplate` <a name="PutServiceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putServiceDataFlowTemplate"></a>

```csharp
private void PutServiceDataFlowTemplate(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.putServiceDataFlowTemplate.parameter.value"></a>

- *Type:* object

---

##### `ResetQosPolicy` <a name="ResetQosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetQosPolicy"></a>

```csharp
private void ResetQosPolicy()
```

##### `ResetTrafficControlEnabled` <a name="ResetTrafficControlEnabled" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.resetTrafficControlEnabled"></a>

```csharp
private void ResetTrafficControlEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicy">QosPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference">MobileNetworkServicePccRuleQosPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplate">ServiceDataFlowTemplate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList">MobileNetworkServicePccRuleServiceDataFlowTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedenceInput">PrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicyInput">QosPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplateInput">ServiceDataFlowTemplateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabledInput">TrafficControlEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabled">TrafficControlEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QosPolicy`<sup>Required</sup> <a name="QosPolicy" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicy"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyOutputReference QosPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference">MobileNetworkServicePccRuleQosPolicyOutputReference</a>

---

##### `ServiceDataFlowTemplate`<sup>Required</sup> <a name="ServiceDataFlowTemplate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplate"></a>

```csharp
public MobileNetworkServicePccRuleServiceDataFlowTemplateList ServiceDataFlowTemplate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList">MobileNetworkServicePccRuleServiceDataFlowTemplateList</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedenceInput"></a>

```csharp
public double PrecedenceInput { get; }
```

- *Type:* double

---

##### `QosPolicyInput`<sup>Optional</sup> <a name="QosPolicyInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.qosPolicyInput"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicy QosPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

---

##### `ServiceDataFlowTemplateInput`<sup>Optional</sup> <a name="ServiceDataFlowTemplateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.serviceDataFlowTemplateInput"></a>

```csharp
public object ServiceDataFlowTemplateInput { get; }
```

- *Type:* object

---

##### `TrafficControlEnabledInput`<sup>Optional</sup> <a name="TrafficControlEnabledInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabledInput"></a>

```csharp
public object TrafficControlEnabledInput { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `TrafficControlEnabled`<sup>Required</sup> <a name="TrafficControlEnabled" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.trafficControlEnabled"></a>

```csharp
public object TrafficControlEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference <a name="MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlink">Downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplink">Uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlinkInput"></a>

```csharp
public string DownlinkInput { get; }
```

- *Type:* string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplinkInput"></a>

```csharp
public string UplinkInput { get; }
```

- *Type:* string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.downlink"></a>

```csharp
public string Downlink { get; }
```

- *Type:* string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.uplink"></a>

```csharp
public string Uplink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---


### MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference <a name="MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlinkInput"></a>

```csharp
public string DownlinkInput { get; }
```

- *Type:* string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplinkInput"></a>

```csharp
public string UplinkInput { get; }
```

- *Type:* string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.downlink"></a>

```csharp
public string Downlink { get; }
```

- *Type:* string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.uplink"></a>

```csharp
public string Uplink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyMaximumBitRate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---


### MobileNetworkServicePccRuleQosPolicyOutputReference <a name="MobileNetworkServicePccRuleQosPolicyOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleQosPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putGuaranteedBitRate">PutGuaranteedBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putMaximumBitRate">PutMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel">ResetAllocationAndRetentionPriorityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetGuaranteedBitRate">ResetGuaranteedBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionCapability">ResetPreemptionCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionVulnerability">ResetPreemptionVulnerability</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuaranteedBitRate` <a name="PutGuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putGuaranteedBitRate"></a>

```csharp
private void PutGuaranteedBitRate(MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putGuaranteedBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---

##### `PutMaximumBitRate` <a name="PutMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putMaximumBitRate"></a>

```csharp
private void PutMaximumBitRate(MobileNetworkServicePccRuleQosPolicyMaximumBitRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.putMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---

##### `ResetAllocationAndRetentionPriorityLevel` <a name="ResetAllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel"></a>

```csharp
private void ResetAllocationAndRetentionPriorityLevel()
```

##### `ResetGuaranteedBitRate` <a name="ResetGuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetGuaranteedBitRate"></a>

```csharp
private void ResetGuaranteedBitRate()
```

##### `ResetPreemptionCapability` <a name="ResetPreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionCapability"></a>

```csharp
private void ResetPreemptionCapability()
```

##### `ResetPreemptionVulnerability` <a name="ResetPreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.resetPreemptionVulnerability"></a>

```csharp
private void ResetPreemptionVulnerability()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRate">GuaranteedBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRate">MaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput">AllocationAndRetentionPriorityLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRateInput">GuaranteedBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRateInput">MaximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapabilityInput">PreemptionCapabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerabilityInput">PreemptionVulnerabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicatorInput">QosIndicatorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapability">PreemptionCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicator">QosIndicator</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuaranteedBitRate`<sup>Required</sup> <a name="GuaranteedBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRate"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference GuaranteedBitRate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRateOutputReference</a>

---

##### `MaximumBitRate`<sup>Required</sup> <a name="MaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRate"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference MaximumBitRate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference">MobileNetworkServicePccRuleQosPolicyMaximumBitRateOutputReference</a>

---

##### `AllocationAndRetentionPriorityLevelInput`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevelInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput"></a>

```csharp
public double AllocationAndRetentionPriorityLevelInput { get; }
```

- *Type:* double

---

##### `GuaranteedBitRateInput`<sup>Optional</sup> <a name="GuaranteedBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.guaranteedBitRateInput"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate GuaranteedBitRateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate">MobileNetworkServicePccRuleQosPolicyGuaranteedBitRate</a>

---

##### `MaximumBitRateInput`<sup>Optional</sup> <a name="MaximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.maximumBitRateInput"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicyMaximumBitRate MaximumBitRateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyMaximumBitRate">MobileNetworkServicePccRuleQosPolicyMaximumBitRate</a>

---

##### `PreemptionCapabilityInput`<sup>Optional</sup> <a name="PreemptionCapabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapabilityInput"></a>

```csharp
public string PreemptionCapabilityInput { get; }
```

- *Type:* string

---

##### `PreemptionVulnerabilityInput`<sup>Optional</sup> <a name="PreemptionVulnerabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerabilityInput"></a>

```csharp
public string PreemptionVulnerabilityInput { get; }
```

- *Type:* string

---

##### `QosIndicatorInput`<sup>Optional</sup> <a name="QosIndicatorInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicatorInput"></a>

```csharp
public double QosIndicatorInput { get; }
```

- *Type:* double

---

##### `AllocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```csharp
public double AllocationAndRetentionPriorityLevel { get; }
```

- *Type:* double

---

##### `PreemptionCapability`<sup>Required</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionCapability"></a>

```csharp
public string PreemptionCapability { get; }
```

- *Type:* string

---

##### `PreemptionVulnerability`<sup>Required</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.preemptionVulnerability"></a>

```csharp
public string PreemptionVulnerability { get; }
```

- *Type:* string

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.qosIndicator"></a>

```csharp
public double QosIndicator { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicyOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkServicePccRuleQosPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleQosPolicy">MobileNetworkServicePccRuleQosPolicy</a>

---


### MobileNetworkServicePccRuleServiceDataFlowTemplateList <a name="MobileNetworkServicePccRuleServiceDataFlowTemplateList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleServiceDataFlowTemplateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.get"></a>

```csharp
private MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference <a name="MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpListInput">RemoteIpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocol">Protocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpList">RemoteIpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocolInput"></a>

```csharp
public string[] ProtocolInput { get; }
```

- *Type:* string[]

---

##### `RemoteIpListInput`<sup>Optional</sup> <a name="RemoteIpListInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpListInput"></a>

```csharp
public string[] RemoteIpListInput { get; }
```

- *Type:* string[]

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.protocol"></a>

```csharp
public string[] Protocol { get; }
```

- *Type:* string[]

---

##### `RemoteIpList`<sup>Required</sup> <a name="RemoteIpList" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.remoteIpList"></a>

```csharp
public string[] RemoteIpList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServicePccRuleServiceDataFlowTemplateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference <a name="MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlinkInput">DownlinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplinkInput">UplinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownlinkInput`<sup>Optional</sup> <a name="DownlinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlinkInput"></a>

```csharp
public string DownlinkInput { get; }
```

- *Type:* string

---

##### `UplinkInput`<sup>Optional</sup> <a name="UplinkInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplinkInput"></a>

```csharp
public string UplinkInput { get; }
```

- *Type:* string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.downlink"></a>

```csharp
public string Downlink { get; }
```

- *Type:* string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.uplink"></a>

```csharp
public string Uplink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkServiceServiceQosPolicyMaximumBitRate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---


### MobileNetworkServiceServiceQosPolicyOutputReference <a name="MobileNetworkServiceServiceQosPolicyOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceServiceQosPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.putMaximumBitRate">PutMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel">ResetAllocationAndRetentionPriorityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionCapability">ResetPreemptionCapability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionVulnerability">ResetPreemptionVulnerability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetQosIndicator">ResetQosIndicator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaximumBitRate` <a name="PutMaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.putMaximumBitRate"></a>

```csharp
private void PutMaximumBitRate(MobileNetworkServiceServiceQosPolicyMaximumBitRate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.putMaximumBitRate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---

##### `ResetAllocationAndRetentionPriorityLevel` <a name="ResetAllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetAllocationAndRetentionPriorityLevel"></a>

```csharp
private void ResetAllocationAndRetentionPriorityLevel()
```

##### `ResetPreemptionCapability` <a name="ResetPreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionCapability"></a>

```csharp
private void ResetPreemptionCapability()
```

##### `ResetPreemptionVulnerability` <a name="ResetPreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetPreemptionVulnerability"></a>

```csharp
private void ResetPreemptionVulnerability()
```

##### `ResetQosIndicator` <a name="ResetQosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.resetQosIndicator"></a>

```csharp
private void ResetQosIndicator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRate">MaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference">MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput">AllocationAndRetentionPriorityLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRateInput">MaximumBitRateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapabilityInput">PreemptionCapabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerabilityInput">PreemptionVulnerabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicatorInput">QosIndicatorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapability">PreemptionCapability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicator">QosIndicator</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBitRate`<sup>Required</sup> <a name="MaximumBitRate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRate"></a>

```csharp
public MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference MaximumBitRate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference">MobileNetworkServiceServiceQosPolicyMaximumBitRateOutputReference</a>

---

##### `AllocationAndRetentionPriorityLevelInput`<sup>Optional</sup> <a name="AllocationAndRetentionPriorityLevelInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevelInput"></a>

```csharp
public double AllocationAndRetentionPriorityLevelInput { get; }
```

- *Type:* double

---

##### `MaximumBitRateInput`<sup>Optional</sup> <a name="MaximumBitRateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.maximumBitRateInput"></a>

```csharp
public MobileNetworkServiceServiceQosPolicyMaximumBitRate MaximumBitRateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyMaximumBitRate">MobileNetworkServiceServiceQosPolicyMaximumBitRate</a>

---

##### `PreemptionCapabilityInput`<sup>Optional</sup> <a name="PreemptionCapabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapabilityInput"></a>

```csharp
public string PreemptionCapabilityInput { get; }
```

- *Type:* string

---

##### `PreemptionVulnerabilityInput`<sup>Optional</sup> <a name="PreemptionVulnerabilityInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerabilityInput"></a>

```csharp
public string PreemptionVulnerabilityInput { get; }
```

- *Type:* string

---

##### `QosIndicatorInput`<sup>Optional</sup> <a name="QosIndicatorInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicatorInput"></a>

```csharp
public double QosIndicatorInput { get; }
```

- *Type:* double

---

##### `AllocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```csharp
public double AllocationAndRetentionPriorityLevel { get; }
```

- *Type:* double

---

##### `PreemptionCapability`<sup>Required</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionCapability"></a>

```csharp
public string PreemptionCapability { get; }
```

- *Type:* string

---

##### `PreemptionVulnerability`<sup>Required</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.preemptionVulnerability"></a>

```csharp
public string PreemptionVulnerability { get; }
```

- *Type:* string

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.qosIndicator"></a>

```csharp
public double QosIndicator { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicyOutputReference.property.internalValue"></a>

```csharp
public MobileNetworkServiceServiceQosPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceServiceQosPolicy">MobileNetworkServiceServiceQosPolicy</a>

---


### MobileNetworkServiceTimeoutsOutputReference <a name="MobileNetworkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new MobileNetworkServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkService.MobileNetworkServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



