# `azurerm_search_shared_private_link_service`

Refer to the Terraform Registory for docs: [`azurerm_search_shared_private_link_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service).

# `searchSharedPrivateLinkService` Submodule <a name="`searchSharedPrivateLinkService` Submodule" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchSharedPrivateLinkService <a name="SearchSharedPrivateLinkService" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service azurerm_search_shared_private_link_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchSharedPrivateLinkService(Construct Scope, string Id, SearchSharedPrivateLinkServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig">SearchSharedPrivateLinkServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig">SearchSharedPrivateLinkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts"></a>

```csharp
private void PutTimeouts(SearchSharedPrivateLinkServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetRequestMessage"></a>

```csharp
private void ResetRequestMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchSharedPrivateLinkService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchSharedPrivateLinkService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

SearchSharedPrivateLinkService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference">SearchSharedPrivateLinkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessageInput">RequestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceIdInput">SearchServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceNameInput">SubresourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessage">RequestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceId">SearchServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceName">SubresourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeouts"></a>

```csharp
public SearchSharedPrivateLinkServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference">SearchSharedPrivateLinkServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessageInput"></a>

```csharp
public string RequestMessageInput { get; }
```

- *Type:* string

---

##### `SearchServiceIdInput`<sup>Optional</sup> <a name="SearchServiceIdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceIdInput"></a>

```csharp
public string SearchServiceIdInput { get; }
```

- *Type:* string

---

##### `SubresourceNameInput`<sup>Optional</sup> <a name="SubresourceNameInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceNameInput"></a>

```csharp
public string SubresourceNameInput { get; }
```

- *Type:* string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceIdInput"></a>

```csharp
public string TargetResourceIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessage"></a>

```csharp
public string RequestMessage { get; }
```

- *Type:* string

---

##### `SearchServiceId`<sup>Required</sup> <a name="SearchServiceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceId"></a>

```csharp
public string SearchServiceId { get; }
```

- *Type:* string

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceName"></a>

```csharp
public string SubresourceName { get; }
```

- *Type:* string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchSharedPrivateLinkServiceConfig <a name="SearchSharedPrivateLinkServiceConfig" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchSharedPrivateLinkServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string SearchServiceId,
    string SubresourceName,
    string TargetResourceId,
    string Id = null,
    string RequestMessage = null,
    SearchSharedPrivateLinkServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#name SearchSharedPrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.searchServiceId">SearchServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#search_service_id SearchSharedPrivateLinkService#search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.subresourceName">SubresourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#subresource_name SearchSharedPrivateLinkService#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.targetResourceId">TargetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#target_resource_id SearchSharedPrivateLinkService#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#id SearchSharedPrivateLinkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.requestMessage">RequestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#request_message SearchSharedPrivateLinkService#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#name SearchSharedPrivateLinkService#name}.

---

##### `SearchServiceId`<sup>Required</sup> <a name="SearchServiceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.searchServiceId"></a>

```csharp
public string SearchServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#search_service_id SearchSharedPrivateLinkService#search_service_id}.

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.subresourceName"></a>

```csharp
public string SubresourceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#subresource_name SearchSharedPrivateLinkService#subresource_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.targetResourceId"></a>

```csharp
public string TargetResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#target_resource_id SearchSharedPrivateLinkService#target_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#id SearchSharedPrivateLinkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.requestMessage"></a>

```csharp
public string RequestMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#request_message SearchSharedPrivateLinkService#request_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.timeouts"></a>

```csharp
public SearchSharedPrivateLinkServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#timeouts SearchSharedPrivateLinkService#timeouts}

---

### SearchSharedPrivateLinkServiceTimeouts <a name="SearchSharedPrivateLinkServiceTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchSharedPrivateLinkServiceTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#create SearchSharedPrivateLinkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#delete SearchSharedPrivateLinkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#read SearchSharedPrivateLinkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#update SearchSharedPrivateLinkService#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#create SearchSharedPrivateLinkService#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#delete SearchSharedPrivateLinkService#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#read SearchSharedPrivateLinkService#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/search_shared_private_link_service#update SearchSharedPrivateLinkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchSharedPrivateLinkServiceTimeoutsOutputReference <a name="SearchSharedPrivateLinkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new SearchSharedPrivateLinkServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



