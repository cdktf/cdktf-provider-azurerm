# `dataAzurermAdvisorRecommendations` Submodule <a name="`dataAzurermAdvisorRecommendations` Submodule" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAdvisorRecommendations <a name="DataAzurermAdvisorRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations azurerm_advisor_recommendations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

new dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations(scope: Construct, id: string, config?: DataAzurermAdvisorRecommendationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig">DataAzurermAdvisorRecommendationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig">DataAzurermAdvisorRecommendationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory">resetFilterByCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups">resetFilterByResourceGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermAdvisorRecommendationsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

---

##### `resetFilterByCategory` <a name="resetFilterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByCategory"></a>

```typescript
public resetFilterByCategory(): void
```

##### `resetFilterByResourceGroups` <a name="resetFilterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetFilterByResourceGroups"></a>

```typescript
public resetFilterByResourceGroups(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations">recommendations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput">filterByCategoryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput">filterByResourceGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory">filterByCategory</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups">filterByResourceGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `recommendations`<sup>Required</sup> <a name="recommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.recommendations"></a>

```typescript
public readonly recommendations: DataAzurermAdvisorRecommendationsRecommendationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList">DataAzurermAdvisorRecommendationsRecommendationsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAdvisorRecommendationsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference">DataAzurermAdvisorRecommendationsTimeoutsOutputReference</a>

---

##### `filterByCategoryInput`<sup>Optional</sup> <a name="filterByCategoryInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategoryInput"></a>

```typescript
public readonly filterByCategoryInput: string[];
```

- *Type:* string[]

---

##### `filterByResourceGroupsInput`<sup>Optional</sup> <a name="filterByResourceGroupsInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroupsInput"></a>

```typescript
public readonly filterByResourceGroupsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermAdvisorRecommendationsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a> | cdktf.IResolvable

---

##### `filterByCategory`<sup>Required</sup> <a name="filterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByCategory"></a>

```typescript
public readonly filterByCategory: string[];
```

- *Type:* string[]

---

##### `filterByResourceGroups`<sup>Required</sup> <a name="filterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.filterByResourceGroups"></a>

```typescript
public readonly filterByResourceGroups: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendations.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAdvisorRecommendationsConfig <a name="DataAzurermAdvisorRecommendationsConfig" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

const dataAzurermAdvisorRecommendationsConfig: dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory">filterByCategory</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups">filterByResourceGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filterByCategory`<sup>Optional</sup> <a name="filterByCategory" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByCategory"></a>

```typescript
public readonly filterByCategory: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#filter_by_category DataAzurermAdvisorRecommendations#filter_by_category}.

---

##### `filterByResourceGroups`<sup>Optional</sup> <a name="filterByResourceGroups" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.filterByResourceGroups"></a>

```typescript
public readonly filterByResourceGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#filter_by_resource_groups DataAzurermAdvisorRecommendations#filter_by_resource_groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#id DataAzurermAdvisorRecommendations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAdvisorRecommendationsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#timeouts DataAzurermAdvisorRecommendations#timeouts}

---

### DataAzurermAdvisorRecommendationsRecommendations <a name="DataAzurermAdvisorRecommendationsRecommendations" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

const dataAzurermAdvisorRecommendationsRecommendations: dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations = { ... }
```


### DataAzurermAdvisorRecommendationsTimeouts <a name="DataAzurermAdvisorRecommendationsTimeouts" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

const dataAzurermAdvisorRecommendationsTimeouts: dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/advisor_recommendations#read DataAzurermAdvisorRecommendations#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAdvisorRecommendationsRecommendationsList <a name="DataAzurermAdvisorRecommendationsRecommendationsList" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

new dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get"></a>

```typescript
public get(index: number): DataAzurermAdvisorRecommendationsRecommendationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAdvisorRecommendationsRecommendationsOutputReference <a name="DataAzurermAdvisorRecommendationsRecommendationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

new dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact">impact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName">recommendationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId">recommendationTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames">suppressionNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime">updatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `impact`<sup>Required</sup> <a name="impact" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.impact"></a>

```typescript
public readonly impact: string;
```

- *Type:* string

---

##### `recommendationName`<sup>Required</sup> <a name="recommendationName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationName"></a>

```typescript
public readonly recommendationName: string;
```

- *Type:* string

---

##### `recommendationTypeId`<sup>Required</sup> <a name="recommendationTypeId" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.recommendationTypeId"></a>

```typescript
public readonly recommendationTypeId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `suppressionNames`<sup>Required</sup> <a name="suppressionNames" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.suppressionNames"></a>

```typescript
public readonly suppressionNames: string[];
```

- *Type:* string[]

---

##### `updatedTime`<sup>Required</sup> <a name="updatedTime" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.updatedTime"></a>

```typescript
public readonly updatedTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAdvisorRecommendationsRecommendations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsRecommendations">DataAzurermAdvisorRecommendationsRecommendations</a>

---


### DataAzurermAdvisorRecommendationsTimeoutsOutputReference <a name="DataAzurermAdvisorRecommendationsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermAdvisorRecommendations } from '@cdktf/provider-azurerm'

new dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAdvisorRecommendationsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAdvisorRecommendations.DataAzurermAdvisorRecommendationsTimeouts">DataAzurermAdvisorRecommendationsTimeouts</a> | cdktf.IResolvable

---



