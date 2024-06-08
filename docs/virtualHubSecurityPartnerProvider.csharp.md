# `virtualHubSecurityPartnerProvider` Submodule <a name="`virtualHubSecurityPartnerProvider` Submodule" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualHubSecurityPartnerProvider <a name="VirtualHubSecurityPartnerProvider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider azurerm_virtual_hub_security_partner_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubSecurityPartnerProvider(Construct Scope, string Id, VirtualHubSecurityPartnerProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig">VirtualHubSecurityPartnerProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig">VirtualHubSecurityPartnerProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetVirtualHubId">ResetVirtualHubId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts"></a>

```csharp
private void PutTimeouts(VirtualHubSecurityPartnerProviderTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualHubId` <a name="ResetVirtualHubId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.resetVirtualHubId"></a>

```csharp
private void ResetVirtualHubId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VirtualHubSecurityPartnerProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubSecurityPartnerProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubSecurityPartnerProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubSecurityPartnerProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

VirtualHubSecurityPartnerProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VirtualHubSecurityPartnerProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VirtualHubSecurityPartnerProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VirtualHubSecurityPartnerProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VirtualHubSecurityPartnerProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference">VirtualHubSecurityPartnerProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderNameInput">SecurityProviderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderName">SecurityProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeouts"></a>

```csharp
public VirtualHubSecurityPartnerProviderTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference">VirtualHubSecurityPartnerProviderTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SecurityProviderNameInput`<sup>Optional</sup> <a name="SecurityProviderNameInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderNameInput"></a>

```csharp
public string SecurityProviderNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubIdInput"></a>

```csharp
public string VirtualHubIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SecurityProviderName`<sup>Required</sup> <a name="SecurityProviderName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.securityProviderName"></a>

```csharp
public string SecurityProviderName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualHubSecurityPartnerProviderConfig <a name="VirtualHubSecurityPartnerProviderConfig" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubSecurityPartnerProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string ResourceGroupName,
    string SecurityProviderName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    VirtualHubSecurityPartnerProviderTimeouts Timeouts = null,
    string VirtualHubId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.securityProviderName">SecurityProviderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#location VirtualHubSecurityPartnerProvider#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#name VirtualHubSecurityPartnerProvider#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#resource_group_name VirtualHubSecurityPartnerProvider#resource_group_name}.

---

##### `SecurityProviderName`<sup>Required</sup> <a name="SecurityProviderName" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.securityProviderName"></a>

```csharp
public string SecurityProviderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#security_provider_name VirtualHubSecurityPartnerProvider#security_provider_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#id VirtualHubSecurityPartnerProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#tags VirtualHubSecurityPartnerProvider#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.timeouts"></a>

```csharp
public VirtualHubSecurityPartnerProviderTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts">VirtualHubSecurityPartnerProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#timeouts VirtualHubSecurityPartnerProvider#timeouts}

---

##### `VirtualHubId`<sup>Optional</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderConfig.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#virtual_hub_id VirtualHubSecurityPartnerProvider#virtual_hub_id}.

---

### VirtualHubSecurityPartnerProviderTimeouts <a name="VirtualHubSecurityPartnerProviderTimeouts" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubSecurityPartnerProviderTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#create VirtualHubSecurityPartnerProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#delete VirtualHubSecurityPartnerProvider#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#read VirtualHubSecurityPartnerProvider#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.107.0/docs/resources/virtual_hub_security_partner_provider#update VirtualHubSecurityPartnerProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualHubSecurityPartnerProviderTimeoutsOutputReference <a name="VirtualHubSecurityPartnerProviderTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new VirtualHubSecurityPartnerProviderTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.virtualHubSecurityPartnerProvider.VirtualHubSecurityPartnerProviderTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



