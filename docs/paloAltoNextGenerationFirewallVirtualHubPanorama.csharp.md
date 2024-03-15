# `paloAltoNextGenerationFirewallVirtualHubPanorama` Submodule <a name="`paloAltoNextGenerationFirewallVirtualHubPanorama` Submodule" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PaloAltoNextGenerationFirewallVirtualHubPanorama <a name="PaloAltoNextGenerationFirewallVirtualHubPanorama" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama azurerm_palo_alto_next_generation_firewall_virtual_hub_panorama}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanorama(Construct Scope, string Id, PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putDestinationNat">PutDestinationNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putDnsSettings">PutDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putNetworkProfile">PutNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetDestinationNat">ResetDestinationNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetDnsSettings">ResetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationNat` <a name="PutDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putDestinationNat"></a>

```csharp
private void PutDestinationNat(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putDestinationNat.parameter.value"></a>

- *Type:* object

---

##### `PutDnsSettings` <a name="PutDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putDnsSettings"></a>

```csharp
private void PutDnsSettings(PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a>

---

##### `PutNetworkProfile` <a name="PutNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putNetworkProfile"></a>

```csharp
private void PutNetworkProfile(PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putNetworkProfile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putTimeouts"></a>

```csharp
private void PutTimeouts(PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts</a>

---

##### `ResetDestinationNat` <a name="ResetDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetDestinationNat"></a>

```csharp
private void ResetDestinationNat()
```

##### `ResetDnsSettings` <a name="ResetDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetDnsSettings"></a>

```csharp
private void ResetDnsSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualHubPanorama resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoNextGenerationFirewallVirtualHubPanorama.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoNextGenerationFirewallVirtualHubPanorama.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoNextGenerationFirewallVirtualHubPanorama.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PaloAltoNextGenerationFirewallVirtualHubPanorama.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PaloAltoNextGenerationFirewallVirtualHubPanorama resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PaloAltoNextGenerationFirewallVirtualHubPanorama to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PaloAltoNextGenerationFirewallVirtualHubPanorama that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PaloAltoNextGenerationFirewallVirtualHubPanorama to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.destinationNat">DestinationNat</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.panorama">Panorama</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList">PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.destinationNatInput">DestinationNatInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.dnsSettingsInput">DnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.networkProfileInput">NetworkProfileInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.panoramaBase64ConfigInput">PanoramaBase64ConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.panoramaBase64Config">PanoramaBase64Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DestinationNat`<sup>Required</sup> <a name="DestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.destinationNat"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList DestinationNat { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList</a>

---

##### `DnsSettings`<sup>Required</sup> <a name="DnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.dnsSettings"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference DnsSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference</a>

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.networkProfile"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference NetworkProfile { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference</a>

---

##### `Panorama`<sup>Required</sup> <a name="Panorama" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.panorama"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList Panorama { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList">PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.timeouts"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference</a>

---

##### `DestinationNatInput`<sup>Optional</sup> <a name="DestinationNatInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.destinationNatInput"></a>

```csharp
public object DestinationNatInput { get; }
```

- *Type:* object

---

##### `DnsSettingsInput`<sup>Optional</sup> <a name="DnsSettingsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.dnsSettingsInput"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings DnsSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkProfileInput`<sup>Optional</sup> <a name="NetworkProfileInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.networkProfileInput"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile NetworkProfileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a>

---

##### `PanoramaBase64ConfigInput`<sup>Optional</sup> <a name="PanoramaBase64ConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.panoramaBase64ConfigInput"></a>

```csharp
public string PanoramaBase64ConfigInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PanoramaBase64Config`<sup>Required</sup> <a name="PanoramaBase64Config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.panoramaBase64Config"></a>

```csharp
public string PanoramaBase64Config { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanorama.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile NetworkProfile,
    string PanoramaBase64Config,
    string ResourceGroupName,
    object DestinationNat = null,
    PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings DnsSettings = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#location PaloAltoNextGenerationFirewallVirtualHubPanorama#location}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#name PaloAltoNextGenerationFirewallVirtualHubPanorama#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.networkProfile">NetworkProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a></code> | network_profile block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.panoramaBase64Config">PanoramaBase64Config</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualHubPanorama#panorama_base64_config}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualHubPanorama#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.destinationNat">DestinationNat</a></code> | <code>object</code> | destination_nat block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#id PaloAltoNextGenerationFirewallVirtualHubPanorama#id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#tags PaloAltoNextGenerationFirewallVirtualHubPanorama#tags}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#location PaloAltoNextGenerationFirewallVirtualHubPanorama#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#name PaloAltoNextGenerationFirewallVirtualHubPanorama#name}.

---

##### `NetworkProfile`<sup>Required</sup> <a name="NetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.networkProfile"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile NetworkProfile { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a>

network_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#network_profile PaloAltoNextGenerationFirewallVirtualHubPanorama#network_profile}

---

##### `PanoramaBase64Config`<sup>Required</sup> <a name="PanoramaBase64Config" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.panoramaBase64Config"></a>

```csharp
public string PanoramaBase64Config { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#panorama_base64_config PaloAltoNextGenerationFirewallVirtualHubPanorama#panorama_base64_config}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#resource_group_name PaloAltoNextGenerationFirewallVirtualHubPanorama#resource_group_name}.

---

##### `DestinationNat`<sup>Optional</sup> <a name="DestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.destinationNat"></a>

```csharp
public object DestinationNat { get; set; }
```

- *Type:* object

destination_nat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#destination_nat PaloAltoNextGenerationFirewallVirtualHubPanorama#destination_nat}

---

##### `DnsSettings`<sup>Optional</sup> <a name="DnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.dnsSettings"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings DnsSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#dns_settings PaloAltoNextGenerationFirewallVirtualHubPanorama#dns_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#id PaloAltoNextGenerationFirewallVirtualHubPanorama#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#tags PaloAltoNextGenerationFirewallVirtualHubPanorama#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaConfig.property.timeouts"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts">PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#timeouts PaloAltoNextGenerationFirewallVirtualHubPanorama#timeouts}

---

### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat {
    string Name,
    string Protocol,
    PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig BackendConfig = null,
    PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig FrontendConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#name PaloAltoNextGenerationFirewallVirtualHubPanorama#name}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#protocol PaloAltoNextGenerationFirewallVirtualHubPanorama#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.backendConfig">BackendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a></code> | backend_config block. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.frontendConfig">FrontendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a></code> | frontend_config block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#name PaloAltoNextGenerationFirewallVirtualHubPanorama#name}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#protocol PaloAltoNextGenerationFirewallVirtualHubPanorama#protocol}.

---

##### `BackendConfig`<sup>Optional</sup> <a name="BackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.backendConfig"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig BackendConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a>

backend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#backend_config PaloAltoNextGenerationFirewallVirtualHubPanorama#backend_config}

---

##### `FrontendConfig`<sup>Optional</sup> <a name="FrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat.property.frontendConfig"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig FrontendConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a>

frontend_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#frontend_config PaloAltoNextGenerationFirewallVirtualHubPanorama#frontend_config}

---

### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig {
    double Port,
    string PublicIpAddress
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#port PaloAltoNextGenerationFirewallVirtualHubPanorama#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#public_ip_address PaloAltoNextGenerationFirewallVirtualHubPanorama#public_ip_address}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#port PaloAltoNextGenerationFirewallVirtualHubPanorama#port}.

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#public_ip_address PaloAltoNextGenerationFirewallVirtualHubPanorama#public_ip_address}.

---

### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig {
    double Port,
    string PublicIpAddressId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#port PaloAltoNextGenerationFirewallVirtualHubPanorama#port}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#public_ip_address_id PaloAltoNextGenerationFirewallVirtualHubPanorama#public_ip_address_id}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#port PaloAltoNextGenerationFirewallVirtualHubPanorama#port}.

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig.property.publicIpAddressId"></a>

```csharp
public string PublicIpAddressId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#public_ip_address_id PaloAltoNextGenerationFirewallVirtualHubPanorama#public_ip_address_id}.

---

### PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings {
    string[] DnsServers = null,
    object UseAzureDns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#dns_servers PaloAltoNextGenerationFirewallVirtualHubPanorama#dns_servers}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings.property.useAzureDns">UseAzureDns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#use_azure_dns PaloAltoNextGenerationFirewallVirtualHubPanorama#use_azure_dns}. |

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#dns_servers PaloAltoNextGenerationFirewallVirtualHubPanorama#dns_servers}.

---

##### `UseAzureDns`<sup>Optional</sup> <a name="UseAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings.property.useAzureDns"></a>

```csharp
public object UseAzureDns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#use_azure_dns PaloAltoNextGenerationFirewallVirtualHubPanorama#use_azure_dns}.

---

### PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile {
    string NetworkVirtualApplianceId,
    string[] PublicIpAddressIds,
    string VirtualHubId,
    string[] EgressNatIpAddressIds = null,
    string[] TrustedAddressRanges = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.networkVirtualApplianceId">NetworkVirtualApplianceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#network_virtual_appliance_id PaloAltoNextGenerationFirewallVirtualHubPanorama#network_virtual_appliance_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.publicIpAddressIds">PublicIpAddressIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubPanorama#public_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#virtual_hub_id PaloAltoNextGenerationFirewallVirtualHubPanorama#virtual_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.egressNatIpAddressIds">EgressNatIpAddressIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubPanorama#egress_nat_ip_address_ids}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.trustedAddressRanges">TrustedAddressRanges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualHubPanorama#trusted_address_ranges}. |

---

##### `NetworkVirtualApplianceId`<sup>Required</sup> <a name="NetworkVirtualApplianceId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.networkVirtualApplianceId"></a>

```csharp
public string NetworkVirtualApplianceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#network_virtual_appliance_id PaloAltoNextGenerationFirewallVirtualHubPanorama#network_virtual_appliance_id}.

---

##### `PublicIpAddressIds`<sup>Required</sup> <a name="PublicIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.publicIpAddressIds"></a>

```csharp
public string[] PublicIpAddressIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#public_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubPanorama#public_ip_address_ids}.

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#virtual_hub_id PaloAltoNextGenerationFirewallVirtualHubPanorama#virtual_hub_id}.

---

##### `EgressNatIpAddressIds`<sup>Optional</sup> <a name="EgressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.egressNatIpAddressIds"></a>

```csharp
public string[] EgressNatIpAddressIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#egress_nat_ip_address_ids PaloAltoNextGenerationFirewallVirtualHubPanorama#egress_nat_ip_address_ids}.

---

##### `TrustedAddressRanges`<sup>Optional</sup> <a name="TrustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile.property.trustedAddressRanges"></a>

```csharp
public string[] TrustedAddressRanges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#trusted_address_ranges PaloAltoNextGenerationFirewallVirtualHubPanorama#trusted_address_ranges}.

---

### PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama {

};
```


### PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#create PaloAltoNextGenerationFirewallVirtualHubPanorama#create}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#delete PaloAltoNextGenerationFirewallVirtualHubPanorama#delete}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#read PaloAltoNextGenerationFirewallVirtualHubPanorama#read}. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#update PaloAltoNextGenerationFirewallVirtualHubPanorama#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#create PaloAltoNextGenerationFirewallVirtualHubPanorama#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#delete PaloAltoNextGenerationFirewallVirtualHubPanorama#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#read PaloAltoNextGenerationFirewallVirtualHubPanorama#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.96.0/docs/resources/palo_alto_next_generation_firewall_virtual_hub_panorama#update PaloAltoNextGenerationFirewallVirtualHubPanorama#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddressInput">PublicIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PublicIpAddressInput`<sup>Optional</sup> <a name="PublicIpAddressInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddressInput"></a>

```csharp
public string PublicIpAddressInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference.property.internalValue"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput">PublicIpAddressIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressId">PublicIpAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PublicIpAddressIdInput`<sup>Optional</sup> <a name="PublicIpAddressIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressIdInput"></a>

```csharp
public string PublicIpAddressIdInput { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PublicIpAddressId`<sup>Required</sup> <a name="PublicIpAddressId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.publicIpAddressId"></a>

```csharp
public string PublicIpAddressId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference.property.internalValue"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a>

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.get"></a>

```csharp
private PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.putBackendConfig">PutBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.putFrontendConfig">PutFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resetBackendConfig">ResetBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resetFrontendConfig">ResetFrontendConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackendConfig` <a name="PutBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.putBackendConfig"></a>

```csharp
private void PutBackendConfig(PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.putBackendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a>

---

##### `PutFrontendConfig` <a name="PutFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.putFrontendConfig"></a>

```csharp
private void PutFrontendConfig(PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.putFrontendConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a>

---

##### `ResetBackendConfig` <a name="ResetBackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resetBackendConfig"></a>

```csharp
private void ResetBackendConfig()
```

##### `ResetFrontendConfig` <a name="ResetFrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.resetFrontendConfig"></a>

```csharp
private void ResetFrontendConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.backendConfig">BackendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.frontendConfig">FrontendConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.backendConfigInput">BackendConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.frontendConfigInput">FrontendConfigInput</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendConfig`<sup>Required</sup> <a name="BackendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.backendConfig"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference BackendConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfigOutputReference</a>

---

##### `FrontendConfig`<sup>Required</sup> <a name="FrontendConfig" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.frontendConfig"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference FrontendConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfigOutputReference</a>

---

##### `BackendConfigInput`<sup>Optional</sup> <a name="BackendConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.backendConfigInput"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig BackendConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatBackendConfig</a>

---

##### `FrontendConfigInput`<sup>Optional</sup> <a name="FrontendConfigInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.frontendConfigInput"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig FrontendConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig">PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatFrontendConfig</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNatOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resetUseAzureDns">ResetUseAzureDns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetUseAzureDns` <a name="ResetUseAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.resetUseAzureDns"></a>

```csharp
private void ResetUseAzureDns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.azureDnsServers">AzureDnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.useAzureDnsInput">UseAzureDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.useAzureDns">UseAzureDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureDnsServers`<sup>Required</sup> <a name="AzureDnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.azureDnsServers"></a>

```csharp
public string[] AzureDnsServers { get; }
```

- *Type:* string[]

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `UseAzureDnsInput`<sup>Optional</sup> <a name="UseAzureDnsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.useAzureDnsInput"></a>

```csharp
public object UseAzureDnsInput { get; }
```

- *Type:* object

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `UseAzureDns`<sup>Required</sup> <a name="UseAzureDns" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.useAzureDns"></a>

```csharp
public object UseAzureDns { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettingsOutputReference.property.internalValue"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings">PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings</a>

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resetEgressNatIpAddressIds">ResetEgressNatIpAddressIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resetTrustedAddressRanges">ResetTrustedAddressRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEgressNatIpAddressIds` <a name="ResetEgressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resetEgressNatIpAddressIds"></a>

```csharp
private void ResetEgressNatIpAddressIds()
```

##### `ResetTrustedAddressRanges` <a name="ResetTrustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.resetTrustedAddressRanges"></a>

```csharp
private void ResetTrustedAddressRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.egressNatIpAddresses">EgressNatIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.ipOfTrustForUserDefinedRoutes">IpOfTrustForUserDefinedRoutes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.publicIpAddresses">PublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.trustedSubnetId">TrustedSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.untrustedSubnetId">UntrustedSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIdsInput">EgressNatIpAddressIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.networkVirtualApplianceIdInput">NetworkVirtualApplianceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.publicIpAddressIdsInput">PublicIpAddressIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.trustedAddressRangesInput">TrustedAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.virtualHubIdInput">VirtualHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIds">EgressNatIpAddressIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.networkVirtualApplianceId">NetworkVirtualApplianceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.publicIpAddressIds">PublicIpAddressIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.trustedAddressRanges">TrustedAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.virtualHubId">VirtualHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EgressNatIpAddresses`<sup>Required</sup> <a name="EgressNatIpAddresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.egressNatIpAddresses"></a>

```csharp
public string[] EgressNatIpAddresses { get; }
```

- *Type:* string[]

---

##### `IpOfTrustForUserDefinedRoutes`<sup>Required</sup> <a name="IpOfTrustForUserDefinedRoutes" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.ipOfTrustForUserDefinedRoutes"></a>

```csharp
public string IpOfTrustForUserDefinedRoutes { get; }
```

- *Type:* string

---

##### `PublicIpAddresses`<sup>Required</sup> <a name="PublicIpAddresses" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.publicIpAddresses"></a>

```csharp
public string[] PublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `TrustedSubnetId`<sup>Required</sup> <a name="TrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.trustedSubnetId"></a>

```csharp
public string TrustedSubnetId { get; }
```

- *Type:* string

---

##### `UntrustedSubnetId`<sup>Required</sup> <a name="UntrustedSubnetId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.untrustedSubnetId"></a>

```csharp
public string UntrustedSubnetId { get; }
```

- *Type:* string

---

##### `EgressNatIpAddressIdsInput`<sup>Optional</sup> <a name="EgressNatIpAddressIdsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIdsInput"></a>

```csharp
public string[] EgressNatIpAddressIdsInput { get; }
```

- *Type:* string[]

---

##### `NetworkVirtualApplianceIdInput`<sup>Optional</sup> <a name="NetworkVirtualApplianceIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.networkVirtualApplianceIdInput"></a>

```csharp
public string NetworkVirtualApplianceIdInput { get; }
```

- *Type:* string

---

##### `PublicIpAddressIdsInput`<sup>Optional</sup> <a name="PublicIpAddressIdsInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.publicIpAddressIdsInput"></a>

```csharp
public string[] PublicIpAddressIdsInput { get; }
```

- *Type:* string[]

---

##### `TrustedAddressRangesInput`<sup>Optional</sup> <a name="TrustedAddressRangesInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.trustedAddressRangesInput"></a>

```csharp
public string[] TrustedAddressRangesInput { get; }
```

- *Type:* string[]

---

##### `VirtualHubIdInput`<sup>Optional</sup> <a name="VirtualHubIdInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.virtualHubIdInput"></a>

```csharp
public string VirtualHubIdInput { get; }
```

- *Type:* string

---

##### `EgressNatIpAddressIds`<sup>Required</sup> <a name="EgressNatIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.egressNatIpAddressIds"></a>

```csharp
public string[] EgressNatIpAddressIds { get; }
```

- *Type:* string[]

---

##### `NetworkVirtualApplianceId`<sup>Required</sup> <a name="NetworkVirtualApplianceId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.networkVirtualApplianceId"></a>

```csharp
public string NetworkVirtualApplianceId { get; }
```

- *Type:* string

---

##### `PublicIpAddressIds`<sup>Required</sup> <a name="PublicIpAddressIds" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.publicIpAddressIds"></a>

```csharp
public string[] PublicIpAddressIds { get; }
```

- *Type:* string[]

---

##### `TrustedAddressRanges`<sup>Required</sup> <a name="TrustedAddressRanges" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.trustedAddressRanges"></a>

```csharp
public string[] TrustedAddressRanges { get; }
```

- *Type:* string[]

---

##### `VirtualHubId`<sup>Required</sup> <a name="VirtualHubId" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.virtualHubId"></a>

```csharp
public string VirtualHubId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfileOutputReference.property.internalValue"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile">PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile</a>

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.get"></a>

```csharp
private PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.deviceGroupName">DeviceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.hostName">HostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.panoramaServer1">PanoramaServer1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.panoramaServer2">PanoramaServer2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.virtualMachineSshKey">VirtualMachineSshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama">PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceGroupName`<sup>Required</sup> <a name="DeviceGroupName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.deviceGroupName"></a>

```csharp
public string DeviceGroupName { get; }
```

- *Type:* string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.hostName"></a>

```csharp
public string HostName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PanoramaServer1`<sup>Required</sup> <a name="PanoramaServer1" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.panoramaServer1"></a>

```csharp
public string PanoramaServer1 { get; }
```

- *Type:* string

---

##### `PanoramaServer2`<sup>Required</sup> <a name="PanoramaServer2" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.panoramaServer2"></a>

```csharp
public string PanoramaServer2 { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

##### `VirtualMachineSshKey`<sup>Required</sup> <a name="VirtualMachineSshKey" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.virtualMachineSshKey"></a>

```csharp
public string VirtualMachineSshKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanoramaOutputReference.property.internalValue"></a>

```csharp
public PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama">PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama</a>

---


### PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference <a name="PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.paloAltoNextGenerationFirewallVirtualHubPanorama.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



