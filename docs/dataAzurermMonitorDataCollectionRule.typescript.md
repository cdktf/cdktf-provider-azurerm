# `dataAzurermMonitorDataCollectionRule` Submodule <a name="`dataAzurermMonitorDataCollectionRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMonitorDataCollectionRule <a name="DataAzurermMonitorDataCollectionRule" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule azurerm_monitor_data_collection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule(scope: Construct, id: string, config: DataAzurermMonitorDataCollectionRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig">DataAzurermMonitorDataCollectionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig">DataAzurermMonitorDataCollectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermMonitorDataCollectionRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList">DataAzurermMonitorDataCollectionRuleDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList">DataAzurermMonitorDataCollectionRuleDataSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList">DataAzurermMonitorDataCollectionRuleDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference">DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataFlow"></a>

```typescript
public readonly dataFlow: DataAzurermMonitorDataCollectionRuleDataFlowList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList">DataAzurermMonitorDataCollectionRuleDataFlowList</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.dataSources"></a>

```typescript
public readonly dataSources: DataAzurermMonitorDataCollectionRuleDataSourcesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList">DataAzurermMonitorDataCollectionRuleDataSourcesList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.destinations"></a>

```typescript
public readonly destinations: DataAzurermMonitorDataCollectionRuleDestinationsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList">DataAzurermMonitorDataCollectionRuleDestinationsList</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference">DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermMonitorDataCollectionRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMonitorDataCollectionRuleConfig <a name="DataAzurermMonitorDataCollectionRuleConfig" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleConfig: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#name DataAzurermMonitorDataCollectionRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#resource_group_name DataAzurermMonitorDataCollectionRule#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#id DataAzurermMonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermMonitorDataCollectionRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#timeouts DataAzurermMonitorDataCollectionRule#timeouts}

---

### DataAzurermMonitorDataCollectionRuleDataFlow <a name="DataAzurermMonitorDataCollectionRuleDataFlow" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDataFlow: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow = { ... }
```


### DataAzurermMonitorDataCollectionRuleDataSources <a name="DataAzurermMonitorDataCollectionRuleDataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDataSources: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources = { ... }
```


### DataAzurermMonitorDataCollectionRuleDataSourcesExtension <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtension" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDataSourcesExtension: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension = { ... }
```


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter = { ... }
```


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDataSourcesSyslog: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog = { ... }
```


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog = { ... }
```


### DataAzurermMonitorDataCollectionRuleDestinations <a name="DataAzurermMonitorDataCollectionRuleDestinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDestinations: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations = { ... }
```


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics = { ... }
```


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics = { ... }
```


### DataAzurermMonitorDataCollectionRuleTimeouts <a name="DataAzurermMonitorDataCollectionRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

const dataAzurermMonitorDataCollectionRuleTimeouts: dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/monitor_data_collection_rule#read DataAzurermMonitorDataCollectionRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMonitorDataCollectionRuleDataFlowList <a name="DataAzurermMonitorDataCollectionRuleDataFlowList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataFlowOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataFlowOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow">DataAzurermMonitorDataCollectionRuleDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDataFlow;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataFlow">DataAzurermMonitorDataCollectionRuleDataFlow</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson">extensionJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName">extensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources">inputDataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension">DataAzurermMonitorDataCollectionRuleDataSourcesExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionJson`<sup>Required</sup> <a name="extensionJson" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson"></a>

```typescript
public readonly extensionJson: string;
```

- *Type:* string

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

---

##### `inputDataSources`<sup>Required</sup> <a name="inputDataSources" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources"></a>

```typescript
public readonly inputDataSources: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDataSourcesExtension;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtension">DataAzurermMonitorDataCollectionRuleDataSourcesExtension</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList">DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter">performanceCounter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.syslog">syslog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList">DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog">windowsEventLog</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources">DataAzurermMonitorDataCollectionRuleDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.extension"></a>

```typescript
public readonly extension: DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList">DataAzurermMonitorDataCollectionRuleDataSourcesExtensionList</a>

---

##### `performanceCounter`<sup>Required</sup> <a name="performanceCounter" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter"></a>

```typescript
public readonly performanceCounter: DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList</a>

---

##### `syslog`<sup>Required</sup> <a name="syslog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.syslog"></a>

```typescript
public readonly syslog: DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList">DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList</a>

---

##### `windowsEventLog`<sup>Required</sup> <a name="windowsEventLog" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog"></a>

```typescript
public readonly windowsEventLog: DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDataSources;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSources">DataAzurermMonitorDataCollectionRuleDataSources</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers">counterSpecifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds">samplingFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `counterSpecifiers`<sup>Required</sup> <a name="counterSpecifiers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers"></a>

```typescript
public readonly counterSpecifiers: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samplingFrequencyInSeconds`<sup>Required</sup> <a name="samplingFrequencyInSeconds" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds"></a>

```typescript
public readonly samplingFrequencyInSeconds: number;
```

- *Type:* number

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter">DataAzurermMonitorDataCollectionRuleDataSourcesPerformanceCounter</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames">facilityNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels">logLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog">DataAzurermMonitorDataCollectionRuleDataSourcesSyslog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facilityNames`<sup>Required</sup> <a name="facilityNames" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames"></a>

```typescript
public readonly facilityNames: string[];
```

- *Type:* string[]

---

##### `logLevels`<sup>Required</sup> <a name="logLevels" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels"></a>

```typescript
public readonly logLevels: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDataSourcesSyslog;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesSyslog">DataAzurermMonitorDataCollectionRuleDataSourcesSyslog</a>

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference <a name="DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries">xPathQueries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `xPathQueries`<sup>Required</sup> <a name="xPathQueries" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries"></a>

```typescript
public readonly xPathQueries: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog">DataAzurermMonitorDataCollectionRuleDataSourcesWindowsEventLog</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get"></a>

```typescript
public get(index: number): DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId">workspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId"></a>

```typescript
public readonly workspaceResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalytics</a>

---


### DataAzurermMonitorDataCollectionRuleDestinationsOutputReference <a name="DataAzurermMonitorDataCollectionRuleDestinationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics">azureMonitorMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations">DataAzurermMonitorDataCollectionRuleDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureMonitorMetrics`<sup>Required</sup> <a name="azureMonitorMetrics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics"></a>

```typescript
public readonly azureMonitorMetrics: DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList">DataAzurermMonitorDataCollectionRuleDestinationsAzureMonitorMetricsList</a>

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics"></a>

```typescript
public readonly logAnalytics: DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList">DataAzurermMonitorDataCollectionRuleDestinationsLogAnalyticsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleDestinations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleDestinations">DataAzurermMonitorDataCollectionRuleDestinations</a>

---


### DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference <a name="DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermMonitorDataCollectionRule } from '@cdktf/provider-azurerm'

new dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermMonitorDataCollectionRuleTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMonitorDataCollectionRule.DataAzurermMonitorDataCollectionRuleTimeouts">DataAzurermMonitorDataCollectionRuleTimeouts</a> | cdktf.IResolvable

---



