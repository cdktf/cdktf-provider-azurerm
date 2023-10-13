# `data_azurerm_cdn_frontdoor_endpoint`

Refer to the Terraform Registory for docs: [`data_azurerm_cdn_frontdoor_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint).

# `dataAzurermCdnFrontdoorEndpoint` Submodule <a name="`dataAzurermCdnFrontdoorEndpoint` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorEndpoint <a name="DataAzurermCdnFrontdoorEndpoint" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint azurerm_cdn_frontdoor_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint(scope: Construct, id: string, config: DataAzurermCdnFrontdoorEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig">DataAzurermCdnFrontdoorEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig">DataAzurermCdnFrontdoorEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermCdnFrontdoorEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isConstruct"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformElement"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformDataSource"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference">DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference">DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermCdnFrontdoorEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorEndpointConfig <a name="DataAzurermCdnFrontdoorEndpointConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

const dataAzurermCdnFrontdoorEndpointConfig: dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#name DataAzurermCdnFrontdoorEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#profile_name DataAzurermCdnFrontdoorEndpoint#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#resource_group_name DataAzurermCdnFrontdoorEndpoint#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#id DataAzurermCdnFrontdoorEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#name DataAzurermCdnFrontdoorEndpoint#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#profile_name DataAzurermCdnFrontdoorEndpoint#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#resource_group_name DataAzurermCdnFrontdoorEndpoint#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#id DataAzurermCdnFrontdoorEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCdnFrontdoorEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#timeouts DataAzurermCdnFrontdoorEndpoint#timeouts}

---

### DataAzurermCdnFrontdoorEndpointTimeouts <a name="DataAzurermCdnFrontdoorEndpointTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

const dataAzurermCdnFrontdoorEndpointTimeouts: dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#read DataAzurermCdnFrontdoorEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/data-sources/cdn_frontdoor_endpoint#read DataAzurermCdnFrontdoorEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorEndpoint } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermCdnFrontdoorEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorEndpoint.DataAzurermCdnFrontdoorEndpointTimeouts">DataAzurermCdnFrontdoorEndpointTimeouts</a>

---



