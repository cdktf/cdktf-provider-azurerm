# `data_azurerm_private_dns_zone_virtual_network_link`

Refer to the Terraform Registory for docs: [`data_azurerm_private_dns_zone_virtual_network_link`](https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link).

# `dataAzurermPrivateDnsZoneVirtualNetworkLink` Submodule <a name="`dataAzurermPrivateDnsZoneVirtualNetworkLink` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLink <a name="DataAzurermPrivateDnsZoneVirtualNetworkLink" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link azurerm_private_dns_zone_virtual_network_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsZoneVirtualNetworkLink(Construct Scope, string Id, DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig">DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig">DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsZoneVirtualNetworkLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsZoneVirtualNetworkLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermPrivateDnsZoneVirtualNetworkLink.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.registrationEnabled">RegistrationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput">PrivateDnsZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName">PrivateDnsZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `RegistrationEnabled`<sup>Required</sup> <a name="RegistrationEnabled" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.registrationEnabled"></a>

```csharp
public IResolvable RegistrationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeouts"></a>

```csharp
public DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference</a>

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrivateDnsZoneNameInput`<sup>Optional</sup> <a name="PrivateDnsZoneNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneNameInput"></a>

```csharp
public string PrivateDnsZoneNameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrivateDnsZoneName`<sup>Required</sup> <a name="PrivateDnsZoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.privateDnsZoneName"></a>

```csharp
public string PrivateDnsZoneName { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string PrivateDnsZoneName,
    string ResourceGroupName,
    string Id = null,
    DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName">PrivateDnsZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#name DataAzurermPrivateDnsZoneVirtualNetworkLink#name}.

---

##### `PrivateDnsZoneName`<sup>Required</sup> <a name="PrivateDnsZoneName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.privateDnsZoneName"></a>

```csharp
public string PrivateDnsZoneName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#private_dns_zone_name DataAzurermPrivateDnsZoneVirtualNetworkLink#private_dns_zone_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#resource_group_name DataAzurermPrivateDnsZoneVirtualNetworkLink#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#id DataAzurermPrivateDnsZoneVirtualNetworkLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkConfig.property.timeouts"></a>

```csharp
public DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts">DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#timeouts DataAzurermPrivateDnsZoneVirtualNetworkLink#timeouts}

---

### DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.53.0/docs/data-sources/private_dns_zone_virtual_network_link#read DataAzurermPrivateDnsZoneVirtualNetworkLink#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference <a name="DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsZoneVirtualNetworkLink.DataAzurermPrivateDnsZoneVirtualNetworkLinkTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



