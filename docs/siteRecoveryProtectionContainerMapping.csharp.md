# `siteRecoveryProtectionContainerMapping` Submodule <a name="`siteRecoveryProtectionContainerMapping` Submodule" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteRecoveryProtectionContainerMapping <a name="SiteRecoveryProtectionContainerMapping" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping azurerm_site_recovery_protection_container_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryProtectionContainerMapping(Construct Scope, string Id, SiteRecoveryProtectionContainerMappingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig">SiteRecoveryProtectionContainerMappingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig">SiteRecoveryProtectionContainerMappingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate">PutAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetAutomaticUpdate">ResetAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutomaticUpdate` <a name="PutAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate"></a>

```csharp
private void PutAutomaticUpdate(SiteRecoveryProtectionContainerMappingAutomaticUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putAutomaticUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts"></a>

```csharp
private void PutTimeouts(SiteRecoveryProtectionContainerMappingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

---

##### `ResetAutomaticUpdate` <a name="ResetAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetAutomaticUpdate"></a>

```csharp
private void ResetAutomaticUpdate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SiteRecoveryProtectionContainerMapping resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryProtectionContainerMapping.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryProtectionContainerMapping.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryProtectionContainerMapping.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SiteRecoveryProtectionContainerMapping.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SiteRecoveryProtectionContainerMapping resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteRecoveryProtectionContainerMapping to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteRecoveryProtectionContainerMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SiteRecoveryProtectionContainerMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdate">AutomaticUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference">SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference">SiteRecoveryProtectionContainerMappingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdateInput">AutomaticUpdateInput</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricNameInput">RecoveryFabricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyIdInput">RecoveryReplicationPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerNameInput">RecoverySourceProtectionContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerIdInput">RecoveryTargetProtectionContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricName">RecoveryFabricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyId">RecoveryReplicationPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerName">RecoverySourceProtectionContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerId">RecoveryTargetProtectionContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutomaticUpdate`<sup>Required</sup> <a name="AutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdate"></a>

```csharp
public SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference AutomaticUpdate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference">SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeouts"></a>

```csharp
public SiteRecoveryProtectionContainerMappingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference">SiteRecoveryProtectionContainerMappingTimeoutsOutputReference</a>

---

##### `AutomaticUpdateInput`<sup>Optional</sup> <a name="AutomaticUpdateInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.automaticUpdateInput"></a>

```csharp
public SiteRecoveryProtectionContainerMappingAutomaticUpdate AutomaticUpdateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RecoveryFabricNameInput`<sup>Optional</sup> <a name="RecoveryFabricNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricNameInput"></a>

```csharp
public string RecoveryFabricNameInput { get; }
```

- *Type:* string

---

##### `RecoveryReplicationPolicyIdInput`<sup>Optional</sup> <a name="RecoveryReplicationPolicyIdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyIdInput"></a>

```csharp
public string RecoveryReplicationPolicyIdInput { get; }
```

- *Type:* string

---

##### `RecoverySourceProtectionContainerNameInput`<sup>Optional</sup> <a name="RecoverySourceProtectionContainerNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerNameInput"></a>

```csharp
public string RecoverySourceProtectionContainerNameInput { get; }
```

- *Type:* string

---

##### `RecoveryTargetProtectionContainerIdInput`<sup>Optional</sup> <a name="RecoveryTargetProtectionContainerIdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerIdInput"></a>

```csharp
public string RecoveryTargetProtectionContainerIdInput { get; }
```

- *Type:* string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultNameInput"></a>

```csharp
public string RecoveryVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RecoveryFabricName`<sup>Required</sup> <a name="RecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryFabricName"></a>

```csharp
public string RecoveryFabricName { get; }
```

- *Type:* string

---

##### `RecoveryReplicationPolicyId`<sup>Required</sup> <a name="RecoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryReplicationPolicyId"></a>

```csharp
public string RecoveryReplicationPolicyId { get; }
```

- *Type:* string

---

##### `RecoverySourceProtectionContainerName`<sup>Required</sup> <a name="RecoverySourceProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoverySourceProtectionContainerName"></a>

```csharp
public string RecoverySourceProtectionContainerName { get; }
```

- *Type:* string

---

##### `RecoveryTargetProtectionContainerId`<sup>Required</sup> <a name="RecoveryTargetProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryTargetProtectionContainerId"></a>

```csharp
public string RecoveryTargetProtectionContainerId { get; }
```

- *Type:* string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMapping.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteRecoveryProtectionContainerMappingAutomaticUpdate <a name="SiteRecoveryProtectionContainerMappingAutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryProtectionContainerMappingAutomaticUpdate {
    string AuthenticationType = null,
    string AutomationAccountId = null,
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}. |

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#authentication_type SiteRecoveryProtectionContainerMapping#authentication_type}.

---

##### `AutomationAccountId`<sup>Optional</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#automation_account_id SiteRecoveryProtectionContainerMapping#automation_account_id}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#enabled SiteRecoveryProtectionContainerMapping#enabled}.

---

### SiteRecoveryProtectionContainerMappingConfig <a name="SiteRecoveryProtectionContainerMappingConfig" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryProtectionContainerMappingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string RecoveryFabricName,
    string RecoveryReplicationPolicyId,
    string RecoverySourceProtectionContainerName,
    string RecoveryTargetProtectionContainerId,
    string RecoveryVaultName,
    string ResourceGroupName,
    SiteRecoveryProtectionContainerMappingAutomaticUpdate AutomaticUpdate = null,
    string Id = null,
    SiteRecoveryProtectionContainerMappingTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryFabricName">RecoveryFabricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryReplicationPolicyId">RecoveryReplicationPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoverySourceProtectionContainerName">RecoverySourceProtectionContainerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryTargetProtectionContainerId">RecoveryTargetProtectionContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.automaticUpdate">AutomaticUpdate</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | automatic_update block. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#name SiteRecoveryProtectionContainerMapping#name}.

---

##### `RecoveryFabricName`<sup>Required</sup> <a name="RecoveryFabricName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryFabricName"></a>

```csharp
public string RecoveryFabricName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_fabric_name SiteRecoveryProtectionContainerMapping#recovery_fabric_name}.

---

##### `RecoveryReplicationPolicyId`<sup>Required</sup> <a name="RecoveryReplicationPolicyId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryReplicationPolicyId"></a>

```csharp
public string RecoveryReplicationPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_replication_policy_id SiteRecoveryProtectionContainerMapping#recovery_replication_policy_id}.

---

##### `RecoverySourceProtectionContainerName`<sup>Required</sup> <a name="RecoverySourceProtectionContainerName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoverySourceProtectionContainerName"></a>

```csharp
public string RecoverySourceProtectionContainerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_source_protection_container_name SiteRecoveryProtectionContainerMapping#recovery_source_protection_container_name}.

---

##### `RecoveryTargetProtectionContainerId`<sup>Required</sup> <a name="RecoveryTargetProtectionContainerId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryTargetProtectionContainerId"></a>

```csharp
public string RecoveryTargetProtectionContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_target_protection_container_id SiteRecoveryProtectionContainerMapping#recovery_target_protection_container_id}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.recoveryVaultName"></a>

```csharp
public string RecoveryVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#recovery_vault_name SiteRecoveryProtectionContainerMapping#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#resource_group_name SiteRecoveryProtectionContainerMapping#resource_group_name}.

---

##### `AutomaticUpdate`<sup>Optional</sup> <a name="AutomaticUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.automaticUpdate"></a>

```csharp
public SiteRecoveryProtectionContainerMappingAutomaticUpdate AutomaticUpdate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

automatic_update block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#automatic_update SiteRecoveryProtectionContainerMapping#automatic_update}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#id SiteRecoveryProtectionContainerMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingConfig.property.timeouts"></a>

```csharp
public SiteRecoveryProtectionContainerMappingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts">SiteRecoveryProtectionContainerMappingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#timeouts SiteRecoveryProtectionContainerMapping#timeouts}

---

### SiteRecoveryProtectionContainerMappingTimeouts <a name="SiteRecoveryProtectionContainerMappingTimeouts" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryProtectionContainerMappingTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#create SiteRecoveryProtectionContainerMapping#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#delete SiteRecoveryProtectionContainerMapping#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#read SiteRecoveryProtectionContainerMapping#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.101.0/docs/resources/site_recovery_protection_container_mapping#update SiteRecoveryProtectionContainerMapping#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference <a name="SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAutomationAccountId">ResetAutomationAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetAutomationAccountId` <a name="ResetAutomationAccountId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetAutomationAccountId"></a>

```csharp
private void ResetAutomationAccountId()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountIdInput">AutomationAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountId">AutomationAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `AutomationAccountIdInput`<sup>Optional</sup> <a name="AutomationAccountIdInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountIdInput"></a>

```csharp
public string AutomationAccountIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.automationAccountId"></a>

```csharp
public string AutomationAccountId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdateOutputReference.property.internalValue"></a>

```csharp
public SiteRecoveryProtectionContainerMappingAutomaticUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingAutomaticUpdate">SiteRecoveryProtectionContainerMappingAutomaticUpdate</a>

---


### SiteRecoveryProtectionContainerMappingTimeoutsOutputReference <a name="SiteRecoveryProtectionContainerMappingTimeoutsOutputReference" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SiteRecoveryProtectionContainerMappingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.siteRecoveryProtectionContainerMapping.SiteRecoveryProtectionContainerMappingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



