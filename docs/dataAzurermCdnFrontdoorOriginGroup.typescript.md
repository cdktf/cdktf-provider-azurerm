# `dataAzurermCdnFrontdoorOriginGroup` Submodule <a name="`dataAzurermCdnFrontdoorOriginGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermCdnFrontdoorOriginGroup <a name="DataAzurermCdnFrontdoorOriginGroup" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group azurerm_cdn_frontdoor_origin_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup(scope: Construct, id: string, config: DataAzurermCdnFrontdoorOriginGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig">DataAzurermCdnFrontdoorOriginGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig">DataAzurermCdnFrontdoorOriginGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermCdnFrontdoorOriginGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId">cdnFrontdoorProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.healthProbe">healthProbe</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList">DataAzurermCdnFrontdoorOriginGroupHealthProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.loadBalancing">loadBalancing</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList">DataAzurermCdnFrontdoorOriginGroupLoadBalancingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes">restoreTrafficTimeToHealedOrNewEndpointInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.sessionAffinityEnabled">sessionAffinityEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference">DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileNameInput">profileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cdnFrontdoorProfileId`<sup>Required</sup> <a name="cdnFrontdoorProfileId" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.cdnFrontdoorProfileId"></a>

```typescript
public readonly cdnFrontdoorProfileId: string;
```

- *Type:* string

---

##### `healthProbe`<sup>Required</sup> <a name="healthProbe" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.healthProbe"></a>

```typescript
public readonly healthProbe: DataAzurermCdnFrontdoorOriginGroupHealthProbeList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList">DataAzurermCdnFrontdoorOriginGroupHealthProbeList</a>

---

##### `loadBalancing`<sup>Required</sup> <a name="loadBalancing" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.loadBalancing"></a>

```typescript
public readonly loadBalancing: DataAzurermCdnFrontdoorOriginGroupLoadBalancingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList">DataAzurermCdnFrontdoorOriginGroupLoadBalancingList</a>

---

##### `restoreTrafficTimeToHealedOrNewEndpointInMinutes`<sup>Required</sup> <a name="restoreTrafficTimeToHealedOrNewEndpointInMinutes" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.restoreTrafficTimeToHealedOrNewEndpointInMinutes"></a>

```typescript
public readonly restoreTrafficTimeToHealedOrNewEndpointInMinutes: number;
```

- *Type:* number

---

##### `sessionAffinityEnabled`<sup>Required</sup> <a name="sessionAffinityEnabled" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.sessionAffinityEnabled"></a>

```typescript
public readonly sessionAffinityEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference">DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileNameInput"></a>

```typescript
public readonly profileNameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermCdnFrontdoorOriginGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermCdnFrontdoorOriginGroupConfig <a name="DataAzurermCdnFrontdoorOriginGroupConfig" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const dataAzurermCdnFrontdoorOriginGroupConfig: dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#name DataAzurermCdnFrontdoorOriginGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.profileName">profileName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#profile_name DataAzurermCdnFrontdoorOriginGroup#profile_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#resource_group_name DataAzurermCdnFrontdoorOriginGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#id DataAzurermCdnFrontdoorOriginGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#name DataAzurermCdnFrontdoorOriginGroup#name}.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#profile_name DataAzurermCdnFrontdoorOriginGroup#profile_name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#resource_group_name DataAzurermCdnFrontdoorOriginGroup#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#id DataAzurermCdnFrontdoorOriginGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermCdnFrontdoorOriginGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#timeouts DataAzurermCdnFrontdoorOriginGroup#timeouts}

---

### DataAzurermCdnFrontdoorOriginGroupHealthProbe <a name="DataAzurermCdnFrontdoorOriginGroupHealthProbe" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const dataAzurermCdnFrontdoorOriginGroupHealthProbe: dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe = { ... }
```


### DataAzurermCdnFrontdoorOriginGroupLoadBalancing <a name="DataAzurermCdnFrontdoorOriginGroupLoadBalancing" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const dataAzurermCdnFrontdoorOriginGroupLoadBalancing: dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing = { ... }
```


### DataAzurermCdnFrontdoorOriginGroupTimeouts <a name="DataAzurermCdnFrontdoorOriginGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

const dataAzurermCdnFrontdoorOriginGroupTimeouts: dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#read DataAzurermCdnFrontdoorOriginGroup#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/cdn_frontdoor_origin_group#read DataAzurermCdnFrontdoorOriginGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermCdnFrontdoorOriginGroupHealthProbeList <a name="DataAzurermCdnFrontdoorOriginGroupHealthProbeList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.get"></a>

```typescript
public get(index: number): DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference <a name="DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType">requestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe">DataAzurermCdnFrontdoorOriginGroupHealthProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.intervalInSeconds"></a>

```typescript
public readonly intervalInSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.requestType"></a>

```typescript
public readonly requestType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCdnFrontdoorOriginGroupHealthProbe;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupHealthProbe">DataAzurermCdnFrontdoorOriginGroupHealthProbe</a>

---


### DataAzurermCdnFrontdoorOriginGroupLoadBalancingList <a name="DataAzurermCdnFrontdoorOriginGroupLoadBalancingList" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.get"></a>

```typescript
public get(index: number): DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference <a name="DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds">additionalLatencyInMilliseconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired">successfulSamplesRequired</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing">DataAzurermCdnFrontdoorOriginGroupLoadBalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalLatencyInMilliseconds`<sup>Required</sup> <a name="additionalLatencyInMilliseconds" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.additionalLatencyInMilliseconds"></a>

```typescript
public readonly additionalLatencyInMilliseconds: number;
```

- *Type:* number

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

##### `successfulSamplesRequired`<sup>Required</sup> <a name="successfulSamplesRequired" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.successfulSamplesRequired"></a>

```typescript
public readonly successfulSamplesRequired: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCdnFrontdoorOriginGroupLoadBalancing;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupLoadBalancing">DataAzurermCdnFrontdoorOriginGroupLoadBalancing</a>

---


### DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference <a name="DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermCdnFrontdoorOriginGroup } from '@cdktf/provider-azurerm'

new dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermCdnFrontdoorOriginGroupTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermCdnFrontdoorOriginGroup.DataAzurermCdnFrontdoorOriginGroupTimeouts">DataAzurermCdnFrontdoorOriginGroupTimeouts</a> | cdktf.IResolvable

---



