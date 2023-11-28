# `orbitalSpacecraft` Submodule <a name="`orbitalSpacecraft` Submodule" id="@cdktf/provider-azurerm.orbitalSpacecraft"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrbitalSpacecraft <a name="OrbitalSpacecraft" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft azurerm_orbital_spacecraft}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraft(Construct Scope, string Id, OrbitalSpacecraftConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig">OrbitalSpacecraftConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig">OrbitalSpacecraftConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks">PutLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutLinks` <a name="PutLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks"></a>

```csharp
private void PutLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putLinks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts"></a>

```csharp
private void PutTimeouts(OrbitalSpacecraftTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalSpacecraft.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalSpacecraft.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalSpacecraft.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OrbitalSpacecraft.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OrbitalSpacecraft resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrbitalSpacecraft to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrbitalSpacecraft that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OrbitalSpacecraft to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links">Links</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput">LinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput">NoradIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput">TitleLineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput">TwoLineElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId">NoradId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine">TitleLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements">TwoLineElements</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.links"></a>

```csharp
public OrbitalSpacecraftLinksList Links { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList">OrbitalSpacecraftLinksList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeouts"></a>

```csharp
public OrbitalSpacecraftTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference">OrbitalSpacecraftTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LinksInput`<sup>Optional</sup> <a name="LinksInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.linksInput"></a>

```csharp
public object LinksInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NoradIdInput`<sup>Optional</sup> <a name="NoradIdInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradIdInput"></a>

```csharp
public string NoradIdInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TitleLineInput`<sup>Optional</sup> <a name="TitleLineInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLineInput"></a>

```csharp
public string TitleLineInput { get; }
```

- *Type:* string

---

##### `TwoLineElementsInput`<sup>Optional</sup> <a name="TwoLineElementsInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElementsInput"></a>

```csharp
public string[] TwoLineElementsInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NoradId`<sup>Required</sup> <a name="NoradId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.noradId"></a>

```csharp
public string NoradId { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TitleLine`<sup>Required</sup> <a name="TitleLine" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.titleLine"></a>

```csharp
public string TitleLine { get; }
```

- *Type:* string

---

##### `TwoLineElements`<sup>Required</sup> <a name="TwoLineElements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.twoLineElements"></a>

```csharp
public string[] TwoLineElements { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraft.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrbitalSpacecraftConfig <a name="OrbitalSpacecraftConfig" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraftConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Links,
    string Location,
    string Name,
    string NoradId,
    string ResourceGroupName,
    string TitleLine,
    string[] TwoLineElements,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    OrbitalSpacecraftTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links">Links</a></code> | <code>object</code> | links block. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId">NoradId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine">TitleLine</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements">TwoLineElements</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.links"></a>

```csharp
public object Links { get; set; }
```

- *Type:* object

links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#links OrbitalSpacecraft#links}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#location OrbitalSpacecraft#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `NoradId`<sup>Required</sup> <a name="NoradId" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.noradId"></a>

```csharp
public string NoradId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#norad_id OrbitalSpacecraft#norad_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#resource_group_name OrbitalSpacecraft#resource_group_name}.

---

##### `TitleLine`<sup>Required</sup> <a name="TitleLine" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.titleLine"></a>

```csharp
public string TitleLine { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#title_line OrbitalSpacecraft#title_line}.

---

##### `TwoLineElements`<sup>Required</sup> <a name="TwoLineElements" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.twoLineElements"></a>

```csharp
public string[] TwoLineElements { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#two_line_elements OrbitalSpacecraft#two_line_elements}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#id OrbitalSpacecraft#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#tags OrbitalSpacecraft#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftConfig.property.timeouts"></a>

```csharp
public OrbitalSpacecraftTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts">OrbitalSpacecraftTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#timeouts OrbitalSpacecraft#timeouts}

---

### OrbitalSpacecraftLinks <a name="OrbitalSpacecraftLinks" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraftLinks {
    double BandwidthMhz,
    double CenterFrequencyMhz,
    string Direction,
    string Name,
    string Polarization
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz">BandwidthMhz</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz">CenterFrequencyMhz</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction">Direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization">Polarization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}. |

---

##### `BandwidthMhz`<sup>Required</sup> <a name="BandwidthMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.bandwidthMhz"></a>

```csharp
public double BandwidthMhz { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#bandwidth_mhz OrbitalSpacecraft#bandwidth_mhz}.

---

##### `CenterFrequencyMhz`<sup>Required</sup> <a name="CenterFrequencyMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.centerFrequencyMhz"></a>

```csharp
public double CenterFrequencyMhz { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#center_frequency_mhz OrbitalSpacecraft#center_frequency_mhz}.

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#direction OrbitalSpacecraft#direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#name OrbitalSpacecraft#name}.

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinks.property.polarization"></a>

```csharp
public string Polarization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#polarization OrbitalSpacecraft#polarization}.

---

### OrbitalSpacecraftTimeouts <a name="OrbitalSpacecraftTimeouts" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraftTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#create OrbitalSpacecraft#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#delete OrbitalSpacecraft#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#read OrbitalSpacecraft#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/orbital_spacecraft#update OrbitalSpacecraft#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrbitalSpacecraftLinksList <a name="OrbitalSpacecraftLinksList" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraftLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get"></a>

```csharp
private OrbitalSpacecraftLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalSpacecraftLinksOutputReference <a name="OrbitalSpacecraftLinksOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraftLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput">BandwidthMhzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput">CenterFrequencyMhzInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput">PolarizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz">BandwidthMhz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz">CenterFrequencyMhz</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization">Polarization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BandwidthMhzInput`<sup>Optional</sup> <a name="BandwidthMhzInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhzInput"></a>

```csharp
public double BandwidthMhzInput { get; }
```

- *Type:* double

---

##### `CenterFrequencyMhzInput`<sup>Optional</sup> <a name="CenterFrequencyMhzInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhzInput"></a>

```csharp
public double CenterFrequencyMhzInput { get; }
```

- *Type:* double

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolarizationInput`<sup>Optional</sup> <a name="PolarizationInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarizationInput"></a>

```csharp
public string PolarizationInput { get; }
```

- *Type:* string

---

##### `BandwidthMhz`<sup>Required</sup> <a name="BandwidthMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.bandwidthMhz"></a>

```csharp
public double BandwidthMhz { get; }
```

- *Type:* double

---

##### `CenterFrequencyMhz`<sup>Required</sup> <a name="CenterFrequencyMhz" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.centerFrequencyMhz"></a>

```csharp
public double CenterFrequencyMhz { get; }
```

- *Type:* double

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Polarization`<sup>Required</sup> <a name="Polarization" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.polarization"></a>

```csharp
public string Polarization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### OrbitalSpacecraftTimeoutsOutputReference <a name="OrbitalSpacecraftTimeoutsOutputReference" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OrbitalSpacecraftTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.orbitalSpacecraft.OrbitalSpacecraftTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



