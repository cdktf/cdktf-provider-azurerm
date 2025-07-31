# `privateDnsResolverDnsForwardingRuleset` Submodule <a name="`privateDnsResolverDnsForwardingRuleset` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverDnsForwardingRuleset <a name="PrivateDnsResolverDnsForwardingRuleset" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset azurerm_private_dns_resolver_dns_forwarding_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverDnsForwardingRuleset(Construct Scope, string Id, PrivateDnsResolverDnsForwardingRulesetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig">PrivateDnsResolverDnsForwardingRulesetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig">PrivateDnsResolverDnsForwardingRulesetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts"></a>

```csharp
private void PutTimeouts(PrivateDnsResolverDnsForwardingRulesetTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverDnsForwardingRuleset.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverDnsForwardingRuleset.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverDnsForwardingRuleset.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PrivateDnsResolverDnsForwardingRuleset.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateDnsResolverDnsForwardingRuleset to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateDnsResolverDnsForwardingRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivateDnsResolverDnsForwardingRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput">PrivateDnsResolverOutboundEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds">PrivateDnsResolverOutboundEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeouts"></a>

```csharp
public PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateDnsResolverOutboundEndpointIdsInput`<sup>Optional</sup> <a name="PrivateDnsResolverOutboundEndpointIdsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIdsInput"></a>

```csharp
public string[] PrivateDnsResolverOutboundEndpointIdsInput { get; }
```

- *Type:* string[]

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="PrivateDnsResolverOutboundEndpointIds" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds"></a>

```csharp
public string[] PrivateDnsResolverOutboundEndpointIds { get; }
```

- *Type:* string[]

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRuleset.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverDnsForwardingRulesetConfig <a name="PrivateDnsResolverDnsForwardingRulesetConfig" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverDnsForwardingRulesetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string[] PrivateDnsResolverOutboundEndpointIds,
    string ResourceGroupName,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PrivateDnsResolverDnsForwardingRulesetTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds">PrivateDnsResolverOutboundEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#location PrivateDnsResolverDnsForwardingRuleset#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#name PrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `PrivateDnsResolverOutboundEndpointIds`<sup>Required</sup> <a name="PrivateDnsResolverOutboundEndpointIds" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.privateDnsResolverOutboundEndpointIds"></a>

```csharp
public string[] PrivateDnsResolverOutboundEndpointIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#private_dns_resolver_outbound_endpoint_ids PrivateDnsResolverDnsForwardingRuleset#private_dns_resolver_outbound_endpoint_ids}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name PrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#id PrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#tags PrivateDnsResolverDnsForwardingRuleset#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts"></a>

```csharp
public PrivateDnsResolverDnsForwardingRulesetTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts">PrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#timeouts PrivateDnsResolverDnsForwardingRuleset#timeouts}

---

### PrivateDnsResolverDnsForwardingRulesetTimeouts <a name="PrivateDnsResolverDnsForwardingRulesetTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverDnsForwardingRulesetTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#create PrivateDnsResolverDnsForwardingRuleset#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#delete PrivateDnsResolverDnsForwardingRuleset#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#read PrivateDnsResolverDnsForwardingRuleset#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.38.0/docs/resources/private_dns_resolver_dns_forwarding_ruleset#update PrivateDnsResolverDnsForwardingRuleset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference <a name="PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateDnsResolverDnsForwardingRuleset.PrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



