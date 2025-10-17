# `monitorDataCollectionRule` Submodule <a name="`monitorDataCollectionRule` Submodule" id="@cdktf/provider-azurerm.monitorDataCollectionRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDataCollectionRule <a name="MonitorDataCollectionRule" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule azurerm_monitor_data_collection_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRule(scope: Construct, id: string, config: MonitorDataCollectionRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig">MonitorDataCollectionRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig">MonitorDataCollectionRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataFlow">putDataFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataSources">putDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putStreamDeclaration">putStreamDeclaration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataCollectionEndpointId">resetDataCollectionEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataSources">resetDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetStreamDeclaration">resetStreamDeclaration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataFlow` <a name="putDataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataFlow"></a>

```typescript
public putDataFlow(value: IResolvable | MonitorDataCollectionRuleDataFlow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataFlow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]

---

##### `putDataSources` <a name="putDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataSources"></a>

```typescript
public putDataSources(value: MonitorDataCollectionRuleDataSources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDataSources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

---

##### `putDestinations` <a name="putDestinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDestinations"></a>

```typescript
public putDestinations(value: MonitorDataCollectionRuleDestinations): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putIdentity"></a>

```typescript
public putIdentity(value: MonitorDataCollectionRuleIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

---

##### `putStreamDeclaration` <a name="putStreamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putStreamDeclaration"></a>

```typescript
public putStreamDeclaration(value: IResolvable | MonitorDataCollectionRuleStreamDeclaration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putStreamDeclaration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putTimeouts"></a>

```typescript
public putTimeouts(value: MonitorDataCollectionRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

---

##### `resetDataCollectionEndpointId` <a name="resetDataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataCollectionEndpointId"></a>

```typescript
public resetDataCollectionEndpointId(): void
```

##### `resetDataSources` <a name="resetDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDataSources"></a>

```typescript
public resetDataSources(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetStreamDeclaration` <a name="resetStreamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetStreamDeclaration"></a>

```typescript
public resetStreamDeclaration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDataCollectionRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MonitorDataCollectionRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MonitorDataCollectionRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MonitorDataCollectionRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDataCollectionRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlow">dataFlow</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList">MonitorDataCollectionRuleDataFlowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference">MonitorDataCollectionRuleDataSourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference">MonitorDataCollectionRuleDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference">MonitorDataCollectionRuleIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.immutableId">immutableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclaration">streamDeclaration</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList">MonitorDataCollectionRuleStreamDeclarationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference">MonitorDataCollectionRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointIdInput">dataCollectionEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlowInput">dataFlowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSourcesInput">dataSourcesInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinationsInput">destinationsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclarationInput">streamDeclarationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlow"></a>

```typescript
public readonly dataFlow: MonitorDataCollectionRuleDataFlowList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList">MonitorDataCollectionRuleDataFlowList</a>

---

##### `dataSources`<sup>Required</sup> <a name="dataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSources"></a>

```typescript
public readonly dataSources: MonitorDataCollectionRuleDataSourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference">MonitorDataCollectionRuleDataSourcesOutputReference</a>

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinations"></a>

```typescript
public readonly destinations: MonitorDataCollectionRuleDestinationsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference">MonitorDataCollectionRuleDestinationsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identity"></a>

```typescript
public readonly identity: MonitorDataCollectionRuleIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference">MonitorDataCollectionRuleIdentityOutputReference</a>

---

##### `immutableId`<sup>Required</sup> <a name="immutableId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.immutableId"></a>

```typescript
public readonly immutableId: string;
```

- *Type:* string

---

##### `streamDeclaration`<sup>Required</sup> <a name="streamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclaration"></a>

```typescript
public readonly streamDeclaration: MonitorDataCollectionRuleStreamDeclarationList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList">MonitorDataCollectionRuleStreamDeclarationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorDataCollectionRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference">MonitorDataCollectionRuleTimeoutsOutputReference</a>

---

##### `dataCollectionEndpointIdInput`<sup>Optional</sup> <a name="dataCollectionEndpointIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointIdInput"></a>

```typescript
public readonly dataCollectionEndpointIdInput: string;
```

- *Type:* string

---

##### `dataFlowInput`<sup>Optional</sup> <a name="dataFlowInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataFlowInput"></a>

```typescript
public readonly dataFlowInput: IResolvable | MonitorDataCollectionRuleDataFlow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]

---

##### `dataSourcesInput`<sup>Optional</sup> <a name="dataSourcesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataSourcesInput"></a>

```typescript
public readonly dataSourcesInput: MonitorDataCollectionRuleDataSources;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: MonitorDataCollectionRuleDestinations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.identityInput"></a>

```typescript
public readonly identityInput: MonitorDataCollectionRuleIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `streamDeclarationInput`<sup>Optional</sup> <a name="streamDeclarationInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.streamDeclarationInput"></a>

```typescript
public readonly streamDeclarationInput: IResolvable | MonitorDataCollectionRuleStreamDeclaration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MonitorDataCollectionRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

---

##### `dataCollectionEndpointId`<sup>Required</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.dataCollectionEndpointId"></a>

```typescript
public readonly dataCollectionEndpointId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDataCollectionRuleConfig <a name="MonitorDataCollectionRuleConfig" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleConfig: monitorDataCollectionRule.MonitorDataCollectionRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataFlow">dataFlow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]</code> | data_flow block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.destinations">destinations</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | destinations block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataCollectionEndpointId">dataCollectionEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataSources">dataSources</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | data_sources block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.kind">kind</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.streamDeclaration">streamDeclaration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]</code> | stream_declaration block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dataFlow`<sup>Required</sup> <a name="dataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataFlow"></a>

```typescript
public readonly dataFlow: IResolvable | MonitorDataCollectionRuleDataFlow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]

data_flow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#data_flow MonitorDataCollectionRule#data_flow}

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.destinations"></a>

```typescript
public readonly destinations: MonitorDataCollectionRuleDestinations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#location MonitorDataCollectionRule#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#resource_group_name MonitorDataCollectionRule#resource_group_name}.

---

##### `dataCollectionEndpointId`<sup>Optional</sup> <a name="dataCollectionEndpointId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataCollectionEndpointId"></a>

```typescript
public readonly dataCollectionEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#data_collection_endpoint_id MonitorDataCollectionRule#data_collection_endpoint_id}.

---

##### `dataSources`<sup>Optional</sup> <a name="dataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.dataSources"></a>

```typescript
public readonly dataSources: MonitorDataCollectionRuleDataSources;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

data_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#data_sources MonitorDataCollectionRule#data_sources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#description MonitorDataCollectionRule#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#id MonitorDataCollectionRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.identity"></a>

```typescript
public readonly identity: MonitorDataCollectionRuleIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#identity MonitorDataCollectionRule#identity}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#kind MonitorDataCollectionRule#kind}.

---

##### `streamDeclaration`<sup>Optional</sup> <a name="streamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.streamDeclaration"></a>

```typescript
public readonly streamDeclaration: IResolvable | MonitorDataCollectionRuleStreamDeclaration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]

stream_declaration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#stream_declaration MonitorDataCollectionRule#stream_declaration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#tags MonitorDataCollectionRule#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MonitorDataCollectionRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#timeouts MonitorDataCollectionRule#timeouts}

---

### MonitorDataCollectionRuleDataFlow <a name="MonitorDataCollectionRuleDataFlow" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataFlow: monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.destinations">destinations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.builtInTransform">builtInTransform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#built_in_transform MonitorDataCollectionRule#built_in_transform}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.outputStream">outputStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#output_stream MonitorDataCollectionRule#output_stream}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.transformKql">transformKql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#transform_kql MonitorDataCollectionRule#transform_kql}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#destinations MonitorDataCollectionRule#destinations}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `builtInTransform`<sup>Optional</sup> <a name="builtInTransform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.builtInTransform"></a>

```typescript
public readonly builtInTransform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#built_in_transform MonitorDataCollectionRule#built_in_transform}.

---

##### `outputStream`<sup>Optional</sup> <a name="outputStream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.outputStream"></a>

```typescript
public readonly outputStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#output_stream MonitorDataCollectionRule#output_stream}.

---

##### `transformKql`<sup>Optional</sup> <a name="transformKql" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow.property.transformKql"></a>

```typescript
public readonly transformKql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#transform_kql MonitorDataCollectionRule#transform_kql}.

---

### MonitorDataCollectionRuleDataSources <a name="MonitorDataCollectionRuleDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSources: monitorDataCollectionRule.MonitorDataCollectionRuleDataSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.dataImport">dataImport</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a></code> | data_import block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.extension">extension</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]</code> | extension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.iisLog">iisLog</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]</code> | iis_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.logFile">logFile</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]</code> | log_file block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.performanceCounter">performanceCounter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]</code> | performance_counter block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.platformTelemetry">platformTelemetry</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]</code> | platform_telemetry block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.prometheusForwarder">prometheusForwarder</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]</code> | prometheus_forwarder block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.syslog">syslog</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]</code> | syslog block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsEventLog">windowsEventLog</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]</code> | windows_event_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsFirewallLog">windowsFirewallLog</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]</code> | windows_firewall_log block. |

---

##### `dataImport`<sup>Optional</sup> <a name="dataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.dataImport"></a>

```typescript
public readonly dataImport: MonitorDataCollectionRuleDataSourcesDataImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

data_import block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#data_import MonitorDataCollectionRule#data_import}

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.extension"></a>

```typescript
public readonly extension: IResolvable | MonitorDataCollectionRuleDataSourcesExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#extension MonitorDataCollectionRule#extension}

---

##### `iisLog`<sup>Optional</sup> <a name="iisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.iisLog"></a>

```typescript
public readonly iisLog: IResolvable | MonitorDataCollectionRuleDataSourcesIisLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]

iis_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#iis_log MonitorDataCollectionRule#iis_log}

---

##### `logFile`<sup>Optional</sup> <a name="logFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.logFile"></a>

```typescript
public readonly logFile: IResolvable | MonitorDataCollectionRuleDataSourcesLogFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]

log_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#log_file MonitorDataCollectionRule#log_file}

---

##### `performanceCounter`<sup>Optional</sup> <a name="performanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.performanceCounter"></a>

```typescript
public readonly performanceCounter: IResolvable | MonitorDataCollectionRuleDataSourcesPerformanceCounter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]

performance_counter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#performance_counter MonitorDataCollectionRule#performance_counter}

---

##### `platformTelemetry`<sup>Optional</sup> <a name="platformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.platformTelemetry"></a>

```typescript
public readonly platformTelemetry: IResolvable | MonitorDataCollectionRuleDataSourcesPlatformTelemetry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]

platform_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#platform_telemetry MonitorDataCollectionRule#platform_telemetry}

---

##### `prometheusForwarder`<sup>Optional</sup> <a name="prometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.prometheusForwarder"></a>

```typescript
public readonly prometheusForwarder: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarder[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]

prometheus_forwarder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#prometheus_forwarder MonitorDataCollectionRule#prometheus_forwarder}

---

##### `syslog`<sup>Optional</sup> <a name="syslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.syslog"></a>

```typescript
public readonly syslog: IResolvable | MonitorDataCollectionRuleDataSourcesSyslog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]

syslog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#syslog MonitorDataCollectionRule#syslog}

---

##### `windowsEventLog`<sup>Optional</sup> <a name="windowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsEventLog"></a>

```typescript
public readonly windowsEventLog: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsEventLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]

windows_event_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#windows_event_log MonitorDataCollectionRule#windows_event_log}

---

##### `windowsFirewallLog`<sup>Optional</sup> <a name="windowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources.property.windowsFirewallLog"></a>

```typescript
public readonly windowsFirewallLog: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]

windows_firewall_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#windows_firewall_log MonitorDataCollectionRule#windows_firewall_log}

---

### MonitorDataCollectionRuleDataSourcesDataImport <a name="MonitorDataCollectionRuleDataSourcesDataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesDataImport: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport.property.eventHubDataSource">eventHubDataSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]</code> | event_hub_data_source block. |

---

##### `eventHubDataSource`<sup>Required</sup> <a name="eventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport.property.eventHubDataSource"></a>

```typescript
public readonly eventHubDataSource: IResolvable | MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]

event_hub_data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub_data_source MonitorDataCollectionRule#event_hub_data_source}

---

### MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource <a name="MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesDataImportEventHubDataSource: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.stream">stream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#stream MonitorDataCollectionRule#stream}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#consumer_group MonitorDataCollectionRule#consumer_group}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#stream MonitorDataCollectionRule#stream}.

---

##### `consumerGroup`<sup>Optional</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#consumer_group MonitorDataCollectionRule#consumer_group}.

---

### MonitorDataCollectionRuleDataSourcesExtension <a name="MonitorDataCollectionRuleDataSourcesExtension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesExtension: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionName">extensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#extension_name MonitorDataCollectionRule#extension_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionJson">extensionJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#extension_json MonitorDataCollectionRule#extension_json}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.inputDataSources">inputDataSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#input_data_sources MonitorDataCollectionRule#input_data_sources}. |

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#extension_name MonitorDataCollectionRule#extension_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `extensionJson`<sup>Optional</sup> <a name="extensionJson" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.extensionJson"></a>

```typescript
public readonly extensionJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#extension_json MonitorDataCollectionRule#extension_json}.

---

##### `inputDataSources`<sup>Optional</sup> <a name="inputDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension.property.inputDataSources"></a>

```typescript
public readonly inputDataSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#input_data_sources MonitorDataCollectionRule#input_data_sources}.

---

### MonitorDataCollectionRuleDataSourcesIisLog <a name="MonitorDataCollectionRuleDataSourcesIisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesIisLog: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.logDirectories">logDirectories</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#log_directories MonitorDataCollectionRule#log_directories}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `logDirectories`<sup>Optional</sup> <a name="logDirectories" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog.property.logDirectories"></a>

```typescript
public readonly logDirectories: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#log_directories MonitorDataCollectionRule#log_directories}.

---

### MonitorDataCollectionRuleDataSourcesLogFile <a name="MonitorDataCollectionRuleDataSourcesLogFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesLogFile: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.filePatterns">filePatterns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#file_patterns MonitorDataCollectionRule#file_patterns}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#format MonitorDataCollectionRule#format}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | settings block. |

---

##### `filePatterns`<sup>Required</sup> <a name="filePatterns" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.filePatterns"></a>

```typescript
public readonly filePatterns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#file_patterns MonitorDataCollectionRule#file_patterns}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#format MonitorDataCollectionRule#format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `settings`<sup>Optional</sup> <a name="settings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile.property.settings"></a>

```typescript
public readonly settings: MonitorDataCollectionRuleDataSourcesLogFileSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#settings MonitorDataCollectionRule#settings}

---

### MonitorDataCollectionRuleDataSourcesLogFileSettings <a name="MonitorDataCollectionRuleDataSourcesLogFileSettings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesLogFileSettings: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings.property.text">text</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | text block. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings.property.text"></a>

```typescript
public readonly text: MonitorDataCollectionRuleDataSourcesLogFileSettingsText;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#text MonitorDataCollectionRule#text}

---

### MonitorDataCollectionRuleDataSourcesLogFileSettingsText <a name="MonitorDataCollectionRuleDataSourcesLogFileSettingsText" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesLogFileSettingsText: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText.property.recordStartTimestampFormat">recordStartTimestampFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#record_start_timestamp_format MonitorDataCollectionRule#record_start_timestamp_format}. |

---

##### `recordStartTimestampFormat`<sup>Required</sup> <a name="recordStartTimestampFormat" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText.property.recordStartTimestampFormat"></a>

```typescript
public readonly recordStartTimestampFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#record_start_timestamp_format MonitorDataCollectionRule#record_start_timestamp_format}.

---

### MonitorDataCollectionRuleDataSourcesPerformanceCounter <a name="MonitorDataCollectionRuleDataSourcesPerformanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesPerformanceCounter: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.counterSpecifiers">counterSpecifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#counter_specifiers MonitorDataCollectionRule#counter_specifiers}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.samplingFrequencyInSeconds">samplingFrequencyInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#sampling_frequency_in_seconds MonitorDataCollectionRule#sampling_frequency_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `counterSpecifiers`<sup>Required</sup> <a name="counterSpecifiers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.counterSpecifiers"></a>

```typescript
public readonly counterSpecifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#counter_specifiers MonitorDataCollectionRule#counter_specifiers}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `samplingFrequencyInSeconds`<sup>Required</sup> <a name="samplingFrequencyInSeconds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.samplingFrequencyInSeconds"></a>

```typescript
public readonly samplingFrequencyInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#sampling_frequency_in_seconds MonitorDataCollectionRule#sampling_frequency_in_seconds}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDataSourcesPlatformTelemetry <a name="MonitorDataCollectionRuleDataSourcesPlatformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesPlatformTelemetry: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDataSourcesPrometheusForwarder <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesPrometheusForwarder: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.labelIncludeFilter">labelIncludeFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]</code> | label_include_filter block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `labelIncludeFilter`<sup>Optional</sup> <a name="labelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder.property.labelIncludeFilter"></a>

```typescript
public readonly labelIncludeFilter: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]

label_include_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#label_include_filter MonitorDataCollectionRule#label_include_filter}

---

### MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#label MonitorDataCollectionRule#label}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#value MonitorDataCollectionRule#value}. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#label MonitorDataCollectionRule#label}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#value MonitorDataCollectionRule#value}.

---

### MonitorDataCollectionRuleDataSourcesSyslog <a name="MonitorDataCollectionRuleDataSourcesSyslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesSyslog: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.facilityNames">facilityNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#facility_names MonitorDataCollectionRule#facility_names}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.logLevels">logLevels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#log_levels MonitorDataCollectionRule#log_levels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `facilityNames`<sup>Required</sup> <a name="facilityNames" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.facilityNames"></a>

```typescript
public readonly facilityNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#facility_names MonitorDataCollectionRule#facility_names}.

---

##### `logLevels`<sup>Required</sup> <a name="logLevels" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.logLevels"></a>

```typescript
public readonly logLevels: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#log_levels MonitorDataCollectionRule#log_levels}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDataSourcesWindowsEventLog <a name="MonitorDataCollectionRuleDataSourcesWindowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesWindowsEventLog: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.xPathQueries">xPathQueries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#x_path_queries MonitorDataCollectionRule#x_path_queries}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

##### `xPathQueries`<sup>Required</sup> <a name="xPathQueries" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog.property.xPathQueries"></a>

```typescript
public readonly xPathQueries: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#x_path_queries MonitorDataCollectionRule#x_path_queries}.

---

### MonitorDataCollectionRuleDataSourcesWindowsFirewallLog <a name="MonitorDataCollectionRuleDataSourcesWindowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDataSourcesWindowsFirewallLog: monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.streams">streams</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#streams MonitorDataCollectionRule#streams}.

---

### MonitorDataCollectionRuleDestinations <a name="MonitorDataCollectionRuleDestinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinations: monitorDataCollectionRule.MonitorDataCollectionRuleDestinations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.azureMonitorMetrics">azureMonitorMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | azure_monitor_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHub">eventHub</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a></code> | event_hub block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHubDirect">eventHubDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | event_hub_direct block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.logAnalytics">logAnalytics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]</code> | log_analytics block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.monitorAccount">monitorAccount</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]</code> | monitor_account block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlob">storageBlob</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]</code> | storage_blob block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlobDirect">storageBlobDirect</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]</code> | storage_blob_direct block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageTableDirect">storageTableDirect</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]</code> | storage_table_direct block. |

---

##### `azureMonitorMetrics`<sup>Optional</sup> <a name="azureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.azureMonitorMetrics"></a>

```typescript
public readonly azureMonitorMetrics: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

azure_monitor_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#azure_monitor_metrics MonitorDataCollectionRule#azure_monitor_metrics}

---

##### `eventHub`<sup>Optional</sup> <a name="eventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHub"></a>

```typescript
public readonly eventHub: MonitorDataCollectionRuleDestinationsEventHub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

event_hub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub MonitorDataCollectionRule#event_hub}

---

##### `eventHubDirect`<sup>Optional</sup> <a name="eventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.eventHubDirect"></a>

```typescript
public readonly eventHubDirect: MonitorDataCollectionRuleDestinationsEventHubDirect;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

event_hub_direct block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub_direct MonitorDataCollectionRule#event_hub_direct}

---

##### `logAnalytics`<sup>Optional</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.logAnalytics"></a>

```typescript
public readonly logAnalytics: IResolvable | MonitorDataCollectionRuleDestinationsLogAnalytics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]

log_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#log_analytics MonitorDataCollectionRule#log_analytics}

---

##### `monitorAccount`<sup>Optional</sup> <a name="monitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.monitorAccount"></a>

```typescript
public readonly monitorAccount: IResolvable | MonitorDataCollectionRuleDestinationsMonitorAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]

monitor_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#monitor_account MonitorDataCollectionRule#monitor_account}

---

##### `storageBlob`<sup>Optional</sup> <a name="storageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlob"></a>

```typescript
public readonly storageBlob: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]

storage_blob block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_blob MonitorDataCollectionRule#storage_blob}

---

##### `storageBlobDirect`<sup>Optional</sup> <a name="storageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageBlobDirect"></a>

```typescript
public readonly storageBlobDirect: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlobDirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]

storage_blob_direct block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_blob_direct MonitorDataCollectionRule#storage_blob_direct}

---

##### `storageTableDirect`<sup>Optional</sup> <a name="storageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations.property.storageTableDirect"></a>

```typescript
public readonly storageTableDirect: IResolvable | MonitorDataCollectionRuleDestinationsStorageTableDirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]

storage_table_direct block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_table_direct MonitorDataCollectionRule#storage_table_direct}

---

### MonitorDataCollectionRuleDestinationsAzureMonitorMetrics <a name="MonitorDataCollectionRuleDestinationsAzureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsAzureMonitorMetrics: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsEventHub <a name="MonitorDataCollectionRuleDestinationsEventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsEventHub: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.eventHubId">eventHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.eventHubId"></a>

```typescript
public readonly eventHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsEventHubDirect <a name="MonitorDataCollectionRuleDestinationsEventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsEventHubDirect: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.eventHubId">eventHubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.eventHubId"></a>

```typescript
public readonly eventHubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#event_hub_id MonitorDataCollectionRule#event_hub_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsLogAnalytics <a name="MonitorDataCollectionRuleDestinationsLogAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsLogAnalytics: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.workspaceResourceId">workspaceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#workspace_resource_id MonitorDataCollectionRule#workspace_resource_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics.property.workspaceResourceId"></a>

```typescript
public readonly workspaceResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#workspace_resource_id MonitorDataCollectionRule#workspace_resource_id}.

---

### MonitorDataCollectionRuleDestinationsMonitorAccount <a name="MonitorDataCollectionRuleDestinationsMonitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsMonitorAccount: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.monitorAccountId">monitorAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#monitor_account_id MonitorDataCollectionRule#monitor_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |

---

##### `monitorAccountId`<sup>Required</sup> <a name="monitorAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.monitorAccountId"></a>

```typescript
public readonly monitorAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#monitor_account_id MonitorDataCollectionRule#monitor_account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

### MonitorDataCollectionRuleDestinationsStorageBlob <a name="MonitorDataCollectionRuleDestinationsStorageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsStorageBlob: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}.

---

### MonitorDataCollectionRuleDestinationsStorageBlobDirect <a name="MonitorDataCollectionRuleDestinationsStorageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsStorageBlobDirect: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}. |

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#container_name MonitorDataCollectionRule#container_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}.

---

### MonitorDataCollectionRuleDestinationsStorageTableDirect <a name="MonitorDataCollectionRuleDestinationsStorageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleDestinationsStorageTableDirect: monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#table_name MonitorDataCollectionRule#table_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#storage_account_id MonitorDataCollectionRule#storage_account_id}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#table_name MonitorDataCollectionRule#table_name}.

---

### MonitorDataCollectionRuleIdentity <a name="MonitorDataCollectionRuleIdentity" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleIdentity: monitorDataCollectionRule.MonitorDataCollectionRuleIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#identity_ids MonitorDataCollectionRule#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}.

---

##### `identityIds`<sup>Optional</sup> <a name="identityIds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#identity_ids MonitorDataCollectionRule#identity_ids}.

---

### MonitorDataCollectionRuleStreamDeclaration <a name="MonitorDataCollectionRuleStreamDeclaration" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleStreamDeclaration: monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.column">column</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]</code> | column block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#stream_name MonitorDataCollectionRule#stream_name}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.column"></a>

```typescript
public readonly column: IResolvable | MonitorDataCollectionRuleStreamDeclarationColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#column MonitorDataCollectionRule#column}

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#stream_name MonitorDataCollectionRule#stream_name}.

---

### MonitorDataCollectionRuleStreamDeclarationColumn <a name="MonitorDataCollectionRuleStreamDeclarationColumn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleStreamDeclarationColumn: monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#name MonitorDataCollectionRule#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#type MonitorDataCollectionRule#type}.

---

### MonitorDataCollectionRuleTimeouts <a name="MonitorDataCollectionRuleTimeouts" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

const monitorDataCollectionRuleTimeouts: monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#create MonitorDataCollectionRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#delete MonitorDataCollectionRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#read MonitorDataCollectionRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#update MonitorDataCollectionRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#create MonitorDataCollectionRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#delete MonitorDataCollectionRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#read MonitorDataCollectionRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/monitor_data_collection_rule#update MonitorDataCollectionRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDataCollectionRuleDataFlowList <a name="MonitorDataCollectionRuleDataFlowList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataFlowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataFlow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>[]

---


### MonitorDataCollectionRuleDataFlowOutputReference <a name="MonitorDataCollectionRuleDataFlowOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetBuiltInTransform">resetBuiltInTransform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetOutputStream">resetOutputStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetTransformKql">resetTransformKql</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBuiltInTransform` <a name="resetBuiltInTransform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetBuiltInTransform"></a>

```typescript
public resetBuiltInTransform(): void
```

##### `resetOutputStream` <a name="resetOutputStream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetOutputStream"></a>

```typescript
public resetOutputStream(): void
```

##### `resetTransformKql` <a name="resetTransformKql" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.resetTransformKql"></a>

```typescript
public resetTransformKql(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransformInput">builtInTransformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStreamInput">outputStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKqlInput">transformKqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform">builtInTransform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinations">destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStream">outputStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKql">transformKql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `builtInTransformInput`<sup>Optional</sup> <a name="builtInTransformInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransformInput"></a>

```typescript
public readonly builtInTransformInput: string;
```

- *Type:* string

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinationsInput"></a>

```typescript
public readonly destinationsInput: string[];
```

- *Type:* string[]

---

##### `outputStreamInput`<sup>Optional</sup> <a name="outputStreamInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStreamInput"></a>

```typescript
public readonly outputStreamInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `transformKqlInput`<sup>Optional</sup> <a name="transformKqlInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKqlInput"></a>

```typescript
public readonly transformKqlInput: string;
```

- *Type:* string

---

##### `builtInTransform`<sup>Required</sup> <a name="builtInTransform" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.builtInTransform"></a>

```typescript
public readonly builtInTransform: string;
```

- *Type:* string

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.destinations"></a>

```typescript
public readonly destinations: string[];
```

- *Type:* string[]

---

##### `outputStream`<sup>Required</sup> <a name="outputStream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.outputStream"></a>

```typescript
public readonly outputStream: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `transformKql`<sup>Required</sup> <a name="transformKql" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.transformKql"></a>

```typescript
public readonly transformKql: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataFlow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataFlow">MonitorDataCollectionRuleDataFlow</a>

---


### MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList <a name="MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]

---


### MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference <a name="MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resetConsumerGroup">resetConsumerGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConsumerGroup` <a name="resetConsumerGroup" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.resetConsumerGroup"></a>

```typescript
public resetConsumerGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroupInput">consumerGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroupInput`<sup>Optional</sup> <a name="consumerGroupInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroupInput"></a>

```typescript
public readonly consumerGroupInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>

---


### MonitorDataCollectionRuleDataSourcesDataImportOutputReference <a name="MonitorDataCollectionRuleDataSourcesDataImportOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.putEventHubDataSource">putEventHubDataSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEventHubDataSource` <a name="putEventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.putEventHubDataSource"></a>

```typescript
public putEventHubDataSource(value: IResolvable | MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.putEventHubDataSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource">eventHubDataSource</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSourceInput">eventHubDataSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventHubDataSource`<sup>Required</sup> <a name="eventHubDataSource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSource"></a>

```typescript
public readonly eventHubDataSource: MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSourceList</a>

---

##### `eventHubDataSourceInput`<sup>Optional</sup> <a name="eventHubDataSourceInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.eventHubDataSourceInput"></a>

```typescript
public readonly eventHubDataSourceInput: IResolvable | MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource">MonitorDataCollectionRuleDataSourcesDataImportEventHubDataSource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDataSourcesDataImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

---


### MonitorDataCollectionRuleDataSourcesExtensionList <a name="MonitorDataCollectionRuleDataSourcesExtensionList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesExtensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]

---


### MonitorDataCollectionRuleDataSourcesExtensionOutputReference <a name="MonitorDataCollectionRuleDataSourcesExtensionOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetExtensionJson">resetExtensionJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetInputDataSources">resetInputDataSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExtensionJson` <a name="resetExtensionJson" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetExtensionJson"></a>

```typescript
public resetExtensionJson(): void
```

##### `resetInputDataSources` <a name="resetInputDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.resetInputDataSources"></a>

```typescript
public resetInputDataSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJsonInput">extensionJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionNameInput">extensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSourcesInput">inputDataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson">extensionJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName">extensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources">inputDataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensionJsonInput`<sup>Optional</sup> <a name="extensionJsonInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJsonInput"></a>

```typescript
public readonly extensionJsonInput: string;
```

- *Type:* string

---

##### `extensionNameInput`<sup>Optional</sup> <a name="extensionNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionNameInput"></a>

```typescript
public readonly extensionNameInput: string;
```

- *Type:* string

---

##### `inputDataSourcesInput`<sup>Optional</sup> <a name="inputDataSourcesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSourcesInput"></a>

```typescript
public readonly inputDataSourcesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `extensionJson`<sup>Required</sup> <a name="extensionJson" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionJson"></a>

```typescript
public readonly extensionJson: string;
```

- *Type:* string

---

##### `extensionName`<sup>Required</sup> <a name="extensionName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.extensionName"></a>

```typescript
public readonly extensionName: string;
```

- *Type:* string

---

##### `inputDataSources`<sup>Required</sup> <a name="inputDataSources" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.inputDataSources"></a>

```typescript
public readonly inputDataSources: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesExtension;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>

---


### MonitorDataCollectionRuleDataSourcesIisLogList <a name="MonitorDataCollectionRuleDataSourcesIisLogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesIisLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesIisLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]

---


### MonitorDataCollectionRuleDataSourcesIisLogOutputReference <a name="MonitorDataCollectionRuleDataSourcesIisLogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resetLogDirectories">resetLogDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogDirectories` <a name="resetLogDirectories" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.resetLogDirectories"></a>

```typescript
public resetLogDirectories(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectoriesInput">logDirectoriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories">logDirectories</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logDirectoriesInput`<sup>Optional</sup> <a name="logDirectoriesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectoriesInput"></a>

```typescript
public readonly logDirectoriesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `logDirectories`<sup>Required</sup> <a name="logDirectories" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.logDirectories"></a>

```typescript
public readonly logDirectories: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesIisLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>

---


### MonitorDataCollectionRuleDataSourcesLogFileList <a name="MonitorDataCollectionRuleDataSourcesLogFileList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesLogFileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesLogFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]

---


### MonitorDataCollectionRuleDataSourcesLogFileOutputReference <a name="MonitorDataCollectionRuleDataSourcesLogFileOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.putSettings">putSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resetSettings">resetSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSettings` <a name="putSettings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.putSettings"></a>

```typescript
public putSettings(value: MonitorDataCollectionRuleDataSourcesLogFileSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---

##### `resetSettings` <a name="resetSettings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.resetSettings"></a>

```typescript
public resetSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings">settings</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatternsInput">filePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settingsInput">settingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns">filePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settings`<sup>Required</sup> <a name="settings" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settings"></a>

```typescript
public readonly settings: MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference</a>

---

##### `filePatternsInput`<sup>Optional</sup> <a name="filePatternsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatternsInput"></a>

```typescript
public readonly filePatternsInput: string[];
```

- *Type:* string[]

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `settingsInput`<sup>Optional</sup> <a name="settingsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.settingsInput"></a>

```typescript
public readonly settingsInput: MonitorDataCollectionRuleDataSourcesLogFileSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `filePatterns`<sup>Required</sup> <a name="filePatterns" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.filePatterns"></a>

```typescript
public readonly filePatterns: string[];
```

- *Type:* string[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesLogFile;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>

---


### MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference <a name="MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.putText">putText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.putText"></a>

```typescript
public putText(value: MonitorDataCollectionRuleDataSourcesLogFileSettingsText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.text"></a>

```typescript
public readonly text: MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference">MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: MonitorDataCollectionRuleDataSourcesLogFileSettingsText;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDataSourcesLogFileSettings;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettings">MonitorDataCollectionRuleDataSourcesLogFileSettings</a>

---


### MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference <a name="MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormatInput">recordStartTimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat">recordStartTimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recordStartTimestampFormatInput`<sup>Optional</sup> <a name="recordStartTimestampFormatInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormatInput"></a>

```typescript
public readonly recordStartTimestampFormatInput: string;
```

- *Type:* string

---

##### `recordStartTimestampFormat`<sup>Required</sup> <a name="recordStartTimestampFormat" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.recordStartTimestampFormat"></a>

```typescript
public readonly recordStartTimestampFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDataSourcesLogFileSettingsText;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileSettingsText">MonitorDataCollectionRuleDataSourcesLogFileSettingsText</a>

---


### MonitorDataCollectionRuleDataSourcesOutputReference <a name="MonitorDataCollectionRuleDataSourcesOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putDataImport">putDataImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putIisLog">putIisLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putLogFile">putLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPerformanceCounter">putPerformanceCounter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPlatformTelemetry">putPlatformTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPrometheusForwarder">putPrometheusForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putSyslog">putSyslog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsEventLog">putWindowsEventLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsFirewallLog">putWindowsFirewallLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetDataImport">resetDataImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetIisLog">resetIisLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetLogFile">resetLogFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPerformanceCounter">resetPerformanceCounter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPlatformTelemetry">resetPlatformTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPrometheusForwarder">resetPrometheusForwarder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetSyslog">resetSyslog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsEventLog">resetWindowsEventLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsFirewallLog">resetWindowsFirewallLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataImport` <a name="putDataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putDataImport"></a>

```typescript
public putDataImport(value: MonitorDataCollectionRuleDataSourcesDataImport): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putDataImport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putExtension"></a>

```typescript
public putExtension(value: IResolvable | MonitorDataCollectionRuleDataSourcesExtension[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putExtension.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]

---

##### `putIisLog` <a name="putIisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putIisLog"></a>

```typescript
public putIisLog(value: IResolvable | MonitorDataCollectionRuleDataSourcesIisLog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putIisLog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]

---

##### `putLogFile` <a name="putLogFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putLogFile"></a>

```typescript
public putLogFile(value: IResolvable | MonitorDataCollectionRuleDataSourcesLogFile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putLogFile.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]

---

##### `putPerformanceCounter` <a name="putPerformanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPerformanceCounter"></a>

```typescript
public putPerformanceCounter(value: IResolvable | MonitorDataCollectionRuleDataSourcesPerformanceCounter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPerformanceCounter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]

---

##### `putPlatformTelemetry` <a name="putPlatformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPlatformTelemetry"></a>

```typescript
public putPlatformTelemetry(value: IResolvable | MonitorDataCollectionRuleDataSourcesPlatformTelemetry[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPlatformTelemetry.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]

---

##### `putPrometheusForwarder` <a name="putPrometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPrometheusForwarder"></a>

```typescript
public putPrometheusForwarder(value: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarder[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putPrometheusForwarder.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]

---

##### `putSyslog` <a name="putSyslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putSyslog"></a>

```typescript
public putSyslog(value: IResolvable | MonitorDataCollectionRuleDataSourcesSyslog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putSyslog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]

---

##### `putWindowsEventLog` <a name="putWindowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsEventLog"></a>

```typescript
public putWindowsEventLog(value: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsEventLog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsEventLog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]

---

##### `putWindowsFirewallLog` <a name="putWindowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsFirewallLog"></a>

```typescript
public putWindowsFirewallLog(value: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.putWindowsFirewallLog.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]

---

##### `resetDataImport` <a name="resetDataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetDataImport"></a>

```typescript
public resetDataImport(): void
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetExtension"></a>

```typescript
public resetExtension(): void
```

##### `resetIisLog` <a name="resetIisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetIisLog"></a>

```typescript
public resetIisLog(): void
```

##### `resetLogFile` <a name="resetLogFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetLogFile"></a>

```typescript
public resetLogFile(): void
```

##### `resetPerformanceCounter` <a name="resetPerformanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPerformanceCounter"></a>

```typescript
public resetPerformanceCounter(): void
```

##### `resetPlatformTelemetry` <a name="resetPlatformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPlatformTelemetry"></a>

```typescript
public resetPlatformTelemetry(): void
```

##### `resetPrometheusForwarder` <a name="resetPrometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetPrometheusForwarder"></a>

```typescript
public resetPrometheusForwarder(): void
```

##### `resetSyslog` <a name="resetSyslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetSyslog"></a>

```typescript
public resetSyslog(): void
```

##### `resetWindowsEventLog` <a name="resetWindowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsEventLog"></a>

```typescript
public resetWindowsEventLog(): void
```

##### `resetWindowsFirewallLog` <a name="resetWindowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.resetWindowsFirewallLog"></a>

```typescript
public resetWindowsFirewallLog(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport">dataImport</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference">MonitorDataCollectionRuleDataSourcesDataImportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList">MonitorDataCollectionRuleDataSourcesExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog">iisLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList">MonitorDataCollectionRuleDataSourcesIisLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFile">logFile</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList">MonitorDataCollectionRuleDataSourcesLogFileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter">performanceCounter</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList">MonitorDataCollectionRuleDataSourcesPerformanceCounterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry">platformTelemetry</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList">MonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder">prometheusForwarder</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslog">syslog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList">MonitorDataCollectionRuleDataSourcesSyslogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog">windowsEventLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList">MonitorDataCollectionRuleDataSourcesWindowsEventLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog">windowsFirewallLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImportInput">dataImportInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extensionInput">extensionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLogInput">iisLogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFileInput">logFileInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounterInput">performanceCounterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetryInput">platformTelemetryInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarderInput">prometheusForwarderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslogInput">syslogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLogInput">windowsEventLogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLogInput">windowsFirewallLogInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataImport`<sup>Required</sup> <a name="dataImport" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImport"></a>

```typescript
public readonly dataImport: MonitorDataCollectionRuleDataSourcesDataImportOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImportOutputReference">MonitorDataCollectionRuleDataSourcesDataImportOutputReference</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extension"></a>

```typescript
public readonly extension: MonitorDataCollectionRuleDataSourcesExtensionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtensionList">MonitorDataCollectionRuleDataSourcesExtensionList</a>

---

##### `iisLog`<sup>Required</sup> <a name="iisLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLog"></a>

```typescript
public readonly iisLog: MonitorDataCollectionRuleDataSourcesIisLogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLogList">MonitorDataCollectionRuleDataSourcesIisLogList</a>

---

##### `logFile`<sup>Required</sup> <a name="logFile" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFile"></a>

```typescript
public readonly logFile: MonitorDataCollectionRuleDataSourcesLogFileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFileList">MonitorDataCollectionRuleDataSourcesLogFileList</a>

---

##### `performanceCounter`<sup>Required</sup> <a name="performanceCounter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounter"></a>

```typescript
public readonly performanceCounter: MonitorDataCollectionRuleDataSourcesPerformanceCounterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList">MonitorDataCollectionRuleDataSourcesPerformanceCounterList</a>

---

##### `platformTelemetry`<sup>Required</sup> <a name="platformTelemetry" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetry"></a>

```typescript
public readonly platformTelemetry: MonitorDataCollectionRuleDataSourcesPlatformTelemetryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList">MonitorDataCollectionRuleDataSourcesPlatformTelemetryList</a>

---

##### `prometheusForwarder`<sup>Required</sup> <a name="prometheusForwarder" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarder"></a>

```typescript
public readonly prometheusForwarder: MonitorDataCollectionRuleDataSourcesPrometheusForwarderList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderList</a>

---

##### `syslog`<sup>Required</sup> <a name="syslog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslog"></a>

```typescript
public readonly syslog: MonitorDataCollectionRuleDataSourcesSyslogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList">MonitorDataCollectionRuleDataSourcesSyslogList</a>

---

##### `windowsEventLog`<sup>Required</sup> <a name="windowsEventLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLog"></a>

```typescript
public readonly windowsEventLog: MonitorDataCollectionRuleDataSourcesWindowsEventLogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList">MonitorDataCollectionRuleDataSourcesWindowsEventLogList</a>

---

##### `windowsFirewallLog`<sup>Required</sup> <a name="windowsFirewallLog" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLog"></a>

```typescript
public readonly windowsFirewallLog: MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList">MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList</a>

---

##### `dataImportInput`<sup>Optional</sup> <a name="dataImportInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.dataImportInput"></a>

```typescript
public readonly dataImportInput: MonitorDataCollectionRuleDataSourcesDataImport;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesDataImport">MonitorDataCollectionRuleDataSourcesDataImport</a>

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.extensionInput"></a>

```typescript
public readonly extensionInput: IResolvable | MonitorDataCollectionRuleDataSourcesExtension[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesExtension">MonitorDataCollectionRuleDataSourcesExtension</a>[]

---

##### `iisLogInput`<sup>Optional</sup> <a name="iisLogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.iisLogInput"></a>

```typescript
public readonly iisLogInput: IResolvable | MonitorDataCollectionRuleDataSourcesIisLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesIisLog">MonitorDataCollectionRuleDataSourcesIisLog</a>[]

---

##### `logFileInput`<sup>Optional</sup> <a name="logFileInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.logFileInput"></a>

```typescript
public readonly logFileInput: IResolvable | MonitorDataCollectionRuleDataSourcesLogFile[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesLogFile">MonitorDataCollectionRuleDataSourcesLogFile</a>[]

---

##### `performanceCounterInput`<sup>Optional</sup> <a name="performanceCounterInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.performanceCounterInput"></a>

```typescript
public readonly performanceCounterInput: IResolvable | MonitorDataCollectionRuleDataSourcesPerformanceCounter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]

---

##### `platformTelemetryInput`<sup>Optional</sup> <a name="platformTelemetryInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.platformTelemetryInput"></a>

```typescript
public readonly platformTelemetryInput: IResolvable | MonitorDataCollectionRuleDataSourcesPlatformTelemetry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]

---

##### `prometheusForwarderInput`<sup>Optional</sup> <a name="prometheusForwarderInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.prometheusForwarderInput"></a>

```typescript
public readonly prometheusForwarderInput: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarder[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]

---

##### `syslogInput`<sup>Optional</sup> <a name="syslogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.syslogInput"></a>

```typescript
public readonly syslogInput: IResolvable | MonitorDataCollectionRuleDataSourcesSyslog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]

---

##### `windowsEventLogInput`<sup>Optional</sup> <a name="windowsEventLogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsEventLogInput"></a>

```typescript
public readonly windowsEventLogInput: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsEventLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]

---

##### `windowsFirewallLogInput`<sup>Optional</sup> <a name="windowsFirewallLogInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.windowsFirewallLogInput"></a>

```typescript
public readonly windowsFirewallLogInput: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDataSources;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSources">MonitorDataCollectionRuleDataSources</a>

---


### MonitorDataCollectionRuleDataSourcesPerformanceCounterList <a name="MonitorDataCollectionRuleDataSourcesPerformanceCounterList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPerformanceCounter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>[]

---


### MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference <a name="MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiersInput">counterSpecifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSecondsInput">samplingFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers">counterSpecifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds">samplingFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `counterSpecifiersInput`<sup>Optional</sup> <a name="counterSpecifiersInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiersInput"></a>

```typescript
public readonly counterSpecifiersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `samplingFrequencyInSecondsInput`<sup>Optional</sup> <a name="samplingFrequencyInSecondsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSecondsInput"></a>

```typescript
public readonly samplingFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `counterSpecifiers`<sup>Required</sup> <a name="counterSpecifiers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.counterSpecifiers"></a>

```typescript
public readonly counterSpecifiers: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `samplingFrequencyInSeconds`<sup>Required</sup> <a name="samplingFrequencyInSeconds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.samplingFrequencyInSeconds"></a>

```typescript
public readonly samplingFrequencyInSeconds: number;
```

- *Type:* number

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPerformanceCounter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPerformanceCounter">MonitorDataCollectionRuleDataSourcesPerformanceCounter</a>

---


### MonitorDataCollectionRuleDataSourcesPlatformTelemetryList <a name="MonitorDataCollectionRuleDataSourcesPlatformTelemetryList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPlatformTelemetry[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>[]

---


### MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference <a name="MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPlatformTelemetry;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPlatformTelemetry">MonitorDataCollectionRuleDataSourcesPlatformTelemetry</a>

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderList <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarder[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>[]

---


### MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference <a name="MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.putLabelIncludeFilter">putLabelIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resetLabelIncludeFilter">resetLabelIncludeFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabelIncludeFilter` <a name="putLabelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.putLabelIncludeFilter"></a>

```typescript
public putLabelIncludeFilter(value: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.putLabelIncludeFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]

---

##### `resetLabelIncludeFilter` <a name="resetLabelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.resetLabelIncludeFilter"></a>

```typescript
public resetLabelIncludeFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter">labelIncludeFilter</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilterInput">labelIncludeFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labelIncludeFilter`<sup>Required</sup> <a name="labelIncludeFilter" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilter"></a>

```typescript
public readonly labelIncludeFilter: MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilterList</a>

---

##### `labelIncludeFilterInput`<sup>Optional</sup> <a name="labelIncludeFilterInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.labelIncludeFilterInput"></a>

```typescript
public readonly labelIncludeFilterInput: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter">MonitorDataCollectionRuleDataSourcesPrometheusForwarderLabelIncludeFilter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesPrometheusForwarder;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesPrometheusForwarder">MonitorDataCollectionRuleDataSourcesPrometheusForwarder</a>

---


### MonitorDataCollectionRuleDataSourcesSyslogList <a name="MonitorDataCollectionRuleDataSourcesSyslogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesSyslogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesSyslog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>[]

---


### MonitorDataCollectionRuleDataSourcesSyslogOutputReference <a name="MonitorDataCollectionRuleDataSourcesSyslogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNamesInput">facilityNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevelsInput">logLevelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames">facilityNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels">logLevels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facilityNamesInput`<sup>Optional</sup> <a name="facilityNamesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNamesInput"></a>

```typescript
public readonly facilityNamesInput: string[];
```

- *Type:* string[]

---

##### `logLevelsInput`<sup>Optional</sup> <a name="logLevelsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevelsInput"></a>

```typescript
public readonly logLevelsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `facilityNames`<sup>Required</sup> <a name="facilityNames" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.facilityNames"></a>

```typescript
public readonly facilityNames: string[];
```

- *Type:* string[]

---

##### `logLevels`<sup>Required</sup> <a name="logLevels" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.logLevels"></a>

```typescript
public readonly logLevels: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesSyslog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesSyslog">MonitorDataCollectionRuleDataSourcesSyslog</a>

---


### MonitorDataCollectionRuleDataSourcesWindowsEventLogList <a name="MonitorDataCollectionRuleDataSourcesWindowsEventLogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsEventLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>[]

---


### MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference <a name="MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueriesInput">xPathQueriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries">xPathQueries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `xPathQueriesInput`<sup>Optional</sup> <a name="xPathQueriesInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueriesInput"></a>

```typescript
public readonly xPathQueriesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `xPathQueries`<sup>Required</sup> <a name="xPathQueries" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.xPathQueries"></a>

```typescript
public readonly xPathQueries: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsEventLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsEventLog">MonitorDataCollectionRuleDataSourcesWindowsEventLog</a>

---


### MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList <a name="MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsFirewallLog[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>[]

---


### MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference <a name="MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streamsInput">streamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams">streams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `streamsInput`<sup>Optional</sup> <a name="streamsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streamsInput"></a>

```typescript
public readonly streamsInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `streams`<sup>Required</sup> <a name="streams" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.streams"></a>

```typescript
public readonly streams: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDataSourcesWindowsFirewallLog;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDataSourcesWindowsFirewallLog">MonitorDataCollectionRuleDataSourcesWindowsFirewallLog</a>

---


### MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference <a name="MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---


### MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference <a name="MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubIdInput">eventHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId">eventHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventHubIdInput`<sup>Optional</sup> <a name="eventHubIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubIdInput"></a>

```typescript
public readonly eventHubIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.eventHubId"></a>

```typescript
public readonly eventHubId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDestinationsEventHubDirect;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

---


### MonitorDataCollectionRuleDestinationsEventHubOutputReference <a name="MonitorDataCollectionRuleDestinationsEventHubOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubIdInput">eventHubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId">eventHubId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventHubIdInput`<sup>Optional</sup> <a name="eventHubIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubIdInput"></a>

```typescript
public readonly eventHubIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `eventHubId`<sup>Required</sup> <a name="eventHubId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.eventHubId"></a>

```typescript
public readonly eventHubId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDestinationsEventHub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

---


### MonitorDataCollectionRuleDestinationsLogAnalyticsList <a name="MonitorDataCollectionRuleDestinationsLogAnalyticsList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsLogAnalytics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]

---


### MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference <a name="MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceIdInput">workspaceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId">workspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `workspaceResourceIdInput`<sup>Optional</sup> <a name="workspaceResourceIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceIdInput"></a>

```typescript
public readonly workspaceResourceIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `workspaceResourceId`<sup>Required</sup> <a name="workspaceResourceId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.workspaceResourceId"></a>

```typescript
public readonly workspaceResourceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsLogAnalytics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>

---


### MonitorDataCollectionRuleDestinationsMonitorAccountList <a name="MonitorDataCollectionRuleDestinationsMonitorAccountList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsMonitorAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]

---


### MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference <a name="MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountIdInput">monitorAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId">monitorAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `monitorAccountIdInput`<sup>Optional</sup> <a name="monitorAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountIdInput"></a>

```typescript
public readonly monitorAccountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `monitorAccountId`<sup>Required</sup> <a name="monitorAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.monitorAccountId"></a>

```typescript
public readonly monitorAccountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsMonitorAccount;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>

---


### MonitorDataCollectionRuleDestinationsOutputReference <a name="MonitorDataCollectionRuleDestinationsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putAzureMonitorMetrics">putAzureMonitorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHub">putEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHubDirect">putEventHubDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putLogAnalytics">putLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putMonitorAccount">putMonitorAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlob">putStorageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlobDirect">putStorageBlobDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageTableDirect">putStorageTableDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetAzureMonitorMetrics">resetAzureMonitorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHub">resetEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHubDirect">resetEventHubDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetLogAnalytics">resetLogAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetMonitorAccount">resetMonitorAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlob">resetStorageBlob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlobDirect">resetStorageBlobDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageTableDirect">resetStorageTableDirect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAzureMonitorMetrics` <a name="putAzureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putAzureMonitorMetrics"></a>

```typescript
public putAzureMonitorMetrics(value: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putAzureMonitorMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---

##### `putEventHub` <a name="putEventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHub"></a>

```typescript
public putEventHub(value: MonitorDataCollectionRuleDestinationsEventHub): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

---

##### `putEventHubDirect` <a name="putEventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHubDirect"></a>

```typescript
public putEventHubDirect(value: MonitorDataCollectionRuleDestinationsEventHubDirect): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putEventHubDirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

---

##### `putLogAnalytics` <a name="putLogAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putLogAnalytics"></a>

```typescript
public putLogAnalytics(value: IResolvable | MonitorDataCollectionRuleDestinationsLogAnalytics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putLogAnalytics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]

---

##### `putMonitorAccount` <a name="putMonitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putMonitorAccount"></a>

```typescript
public putMonitorAccount(value: IResolvable | MonitorDataCollectionRuleDestinationsMonitorAccount[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putMonitorAccount.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]

---

##### `putStorageBlob` <a name="putStorageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlob"></a>

```typescript
public putStorageBlob(value: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlob[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlob.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]

---

##### `putStorageBlobDirect` <a name="putStorageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlobDirect"></a>

```typescript
public putStorageBlobDirect(value: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlobDirect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageBlobDirect.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]

---

##### `putStorageTableDirect` <a name="putStorageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageTableDirect"></a>

```typescript
public putStorageTableDirect(value: IResolvable | MonitorDataCollectionRuleDestinationsStorageTableDirect[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.putStorageTableDirect.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]

---

##### `resetAzureMonitorMetrics` <a name="resetAzureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetAzureMonitorMetrics"></a>

```typescript
public resetAzureMonitorMetrics(): void
```

##### `resetEventHub` <a name="resetEventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHub"></a>

```typescript
public resetEventHub(): void
```

##### `resetEventHubDirect` <a name="resetEventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetEventHubDirect"></a>

```typescript
public resetEventHubDirect(): void
```

##### `resetLogAnalytics` <a name="resetLogAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetLogAnalytics"></a>

```typescript
public resetLogAnalytics(): void
```

##### `resetMonitorAccount` <a name="resetMonitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetMonitorAccount"></a>

```typescript
public resetMonitorAccount(): void
```

##### `resetStorageBlob` <a name="resetStorageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlob"></a>

```typescript
public resetStorageBlob(): void
```

##### `resetStorageBlobDirect` <a name="resetStorageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageBlobDirect"></a>

```typescript
public resetStorageBlobDirect(): void
```

##### `resetStorageTableDirect` <a name="resetStorageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.resetStorageTableDirect"></a>

```typescript
public resetStorageTableDirect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics">azureMonitorMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference">MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHub">eventHub</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference">MonitorDataCollectionRuleDestinationsEventHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect">eventHubDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference">MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics">logAnalytics</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList">MonitorDataCollectionRuleDestinationsLogAnalyticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount">monitorAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList">MonitorDataCollectionRuleDestinationsMonitorAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob">storageBlob</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList">MonitorDataCollectionRuleDestinationsStorageBlobList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect">storageBlobDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList">MonitorDataCollectionRuleDestinationsStorageBlobDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect">storageTableDirect</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList">MonitorDataCollectionRuleDestinationsStorageTableDirectList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetricsInput">azureMonitorMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirectInput">eventHubDirectInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubInput">eventHubInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalyticsInput">logAnalyticsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccountInput">monitorAccountInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirectInput">storageBlobDirectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobInput">storageBlobInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirectInput">storageTableDirectInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `azureMonitorMetrics`<sup>Required</sup> <a name="azureMonitorMetrics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetrics"></a>

```typescript
public readonly azureMonitorMetrics: MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference">MonitorDataCollectionRuleDestinationsAzureMonitorMetricsOutputReference</a>

---

##### `eventHub`<sup>Required</sup> <a name="eventHub" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHub"></a>

```typescript
public readonly eventHub: MonitorDataCollectionRuleDestinationsEventHubOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubOutputReference">MonitorDataCollectionRuleDestinationsEventHubOutputReference</a>

---

##### `eventHubDirect`<sup>Required</sup> <a name="eventHubDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirect"></a>

```typescript
public readonly eventHubDirect: MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference">MonitorDataCollectionRuleDestinationsEventHubDirectOutputReference</a>

---

##### `logAnalytics`<sup>Required</sup> <a name="logAnalytics" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalytics"></a>

```typescript
public readonly logAnalytics: MonitorDataCollectionRuleDestinationsLogAnalyticsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalyticsList">MonitorDataCollectionRuleDestinationsLogAnalyticsList</a>

---

##### `monitorAccount`<sup>Required</sup> <a name="monitorAccount" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccount"></a>

```typescript
public readonly monitorAccount: MonitorDataCollectionRuleDestinationsMonitorAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccountList">MonitorDataCollectionRuleDestinationsMonitorAccountList</a>

---

##### `storageBlob`<sup>Required</sup> <a name="storageBlob" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlob"></a>

```typescript
public readonly storageBlob: MonitorDataCollectionRuleDestinationsStorageBlobList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList">MonitorDataCollectionRuleDestinationsStorageBlobList</a>

---

##### `storageBlobDirect`<sup>Required</sup> <a name="storageBlobDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirect"></a>

```typescript
public readonly storageBlobDirect: MonitorDataCollectionRuleDestinationsStorageBlobDirectList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList">MonitorDataCollectionRuleDestinationsStorageBlobDirectList</a>

---

##### `storageTableDirect`<sup>Required</sup> <a name="storageTableDirect" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirect"></a>

```typescript
public readonly storageTableDirect: MonitorDataCollectionRuleDestinationsStorageTableDirectList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList">MonitorDataCollectionRuleDestinationsStorageTableDirectList</a>

---

##### `azureMonitorMetricsInput`<sup>Optional</sup> <a name="azureMonitorMetricsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.azureMonitorMetricsInput"></a>

```typescript
public readonly azureMonitorMetricsInput: MonitorDataCollectionRuleDestinationsAzureMonitorMetrics;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsAzureMonitorMetrics">MonitorDataCollectionRuleDestinationsAzureMonitorMetrics</a>

---

##### `eventHubDirectInput`<sup>Optional</sup> <a name="eventHubDirectInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubDirectInput"></a>

```typescript
public readonly eventHubDirectInput: MonitorDataCollectionRuleDestinationsEventHubDirect;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHubDirect">MonitorDataCollectionRuleDestinationsEventHubDirect</a>

---

##### `eventHubInput`<sup>Optional</sup> <a name="eventHubInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.eventHubInput"></a>

```typescript
public readonly eventHubInput: MonitorDataCollectionRuleDestinationsEventHub;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsEventHub">MonitorDataCollectionRuleDestinationsEventHub</a>

---

##### `logAnalyticsInput`<sup>Optional</sup> <a name="logAnalyticsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.logAnalyticsInput"></a>

```typescript
public readonly logAnalyticsInput: IResolvable | MonitorDataCollectionRuleDestinationsLogAnalytics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsLogAnalytics">MonitorDataCollectionRuleDestinationsLogAnalytics</a>[]

---

##### `monitorAccountInput`<sup>Optional</sup> <a name="monitorAccountInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.monitorAccountInput"></a>

```typescript
public readonly monitorAccountInput: IResolvable | MonitorDataCollectionRuleDestinationsMonitorAccount[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsMonitorAccount">MonitorDataCollectionRuleDestinationsMonitorAccount</a>[]

---

##### `storageBlobDirectInput`<sup>Optional</sup> <a name="storageBlobDirectInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobDirectInput"></a>

```typescript
public readonly storageBlobDirectInput: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlobDirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]

---

##### `storageBlobInput`<sup>Optional</sup> <a name="storageBlobInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageBlobInput"></a>

```typescript
public readonly storageBlobInput: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]

---

##### `storageTableDirectInput`<sup>Optional</sup> <a name="storageTableDirectInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.storageTableDirectInput"></a>

```typescript
public readonly storageTableDirectInput: IResolvable | MonitorDataCollectionRuleDestinationsStorageTableDirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleDestinations;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinations">MonitorDataCollectionRuleDestinations</a>

---


### MonitorDataCollectionRuleDestinationsStorageBlobDirectList <a name="MonitorDataCollectionRuleDestinationsStorageBlobDirectList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlobDirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>[]

---


### MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference <a name="MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlobDirect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobDirect">MonitorDataCollectionRuleDestinationsStorageBlobDirect</a>

---


### MonitorDataCollectionRuleDestinationsStorageBlobList <a name="MonitorDataCollectionRuleDestinationsStorageBlobList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDestinationsStorageBlobOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlob[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>[]

---


### MonitorDataCollectionRuleDestinationsStorageBlobOutputReference <a name="MonitorDataCollectionRuleDestinationsStorageBlobOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsStorageBlob;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageBlob">MonitorDataCollectionRuleDestinationsStorageBlob</a>

---


### MonitorDataCollectionRuleDestinationsStorageTableDirectList <a name="MonitorDataCollectionRuleDestinationsStorageTableDirectList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsStorageTableDirect[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>[]

---


### MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference <a name="MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountIdInput">storageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId">storageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `storageAccountIdInput`<sup>Optional</sup> <a name="storageAccountIdInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountIdInput"></a>

```typescript
public readonly storageAccountIdInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `storageAccountId`<sup>Required</sup> <a name="storageAccountId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.storageAccountId"></a>

```typescript
public readonly storageAccountId: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleDestinationsStorageTableDirect;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleDestinationsStorageTableDirect">MonitorDataCollectionRuleDestinationsStorageTableDirect</a>

---


### MonitorDataCollectionRuleIdentityOutputReference <a name="MonitorDataCollectionRuleIdentityOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resetIdentityIds">resetIdentityIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentityIds` <a name="resetIdentityIds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.resetIdentityIds"></a>

```typescript
public resetIdentityIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MonitorDataCollectionRuleIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleIdentity">MonitorDataCollectionRuleIdentity</a>

---


### MonitorDataCollectionRuleStreamDeclarationColumnList <a name="MonitorDataCollectionRuleStreamDeclarationColumnList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleStreamDeclarationColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleStreamDeclarationColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]

---


### MonitorDataCollectionRuleStreamDeclarationColumnOutputReference <a name="MonitorDataCollectionRuleStreamDeclarationColumnOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleStreamDeclarationColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>

---


### MonitorDataCollectionRuleStreamDeclarationList <a name="MonitorDataCollectionRuleStreamDeclarationList" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.get"></a>

```typescript
public get(index: number): MonitorDataCollectionRuleStreamDeclarationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleStreamDeclaration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>[]

---


### MonitorDataCollectionRuleStreamDeclarationOutputReference <a name="MonitorDataCollectionRuleStreamDeclarationOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.putColumn">putColumn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumn` <a name="putColumn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.putColumn"></a>

```typescript
public putColumn(value: IResolvable | MonitorDataCollectionRuleStreamDeclarationColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.putColumn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList">MonitorDataCollectionRuleStreamDeclarationColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.columnInput">columnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.column"></a>

```typescript
public readonly column: MonitorDataCollectionRuleStreamDeclarationColumnList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumnList">MonitorDataCollectionRuleStreamDeclarationColumnList</a>

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | MonitorDataCollectionRuleStreamDeclarationColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationColumn">MonitorDataCollectionRuleStreamDeclarationColumn</a>[]

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclarationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleStreamDeclaration;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleStreamDeclaration">MonitorDataCollectionRuleStreamDeclaration</a>

---


### MonitorDataCollectionRuleTimeoutsOutputReference <a name="MonitorDataCollectionRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { monitorDataCollectionRule } from '@cdktf/provider-azurerm'

new monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MonitorDataCollectionRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.monitorDataCollectionRule.MonitorDataCollectionRuleTimeouts">MonitorDataCollectionRuleTimeouts</a>

---



