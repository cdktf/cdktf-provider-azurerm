# `iotSecuritySolution` Submodule <a name="`iotSecuritySolution` Submodule" id="@cdktf/provider-azurerm.iotSecuritySolution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotSecuritySolution <a name="IotSecuritySolution" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution azurerm_iot_security_solution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

new iotSecuritySolution.IotSecuritySolution(scope: Construct, id: string, config: IotSecuritySolutionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig">IotSecuritySolutionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace">putAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled">putRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace">resetAdditionalWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources">resetDisabledDataSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport">resetEventsToExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId">resetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled">resetLogUnmaskedIpsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources">resetQueryForResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds">resetQuerySubscriptionIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled">resetRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalWorkspace` <a name="putAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace"></a>

```typescript
public putAdditionalWorkspace(value: IResolvable | IotSecuritySolutionAdditionalWorkspace[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putAdditionalWorkspace.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

---

##### `putRecommendationsEnabled` <a name="putRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled"></a>

```typescript
public putRecommendationsEnabled(value: IotSecuritySolutionRecommendationsEnabled): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putRecommendationsEnabled.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts"></a>

```typescript
public putTimeouts(value: IotSecuritySolutionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `resetAdditionalWorkspace` <a name="resetAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetAdditionalWorkspace"></a>

```typescript
public resetAdditionalWorkspace(): void
```

##### `resetDisabledDataSources` <a name="resetDisabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetDisabledDataSources"></a>

```typescript
public resetDisabledDataSources(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEventsToExport` <a name="resetEventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetEventsToExport"></a>

```typescript
public resetEventsToExport(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogAnalyticsWorkspaceId` <a name="resetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogAnalyticsWorkspaceId"></a>

```typescript
public resetLogAnalyticsWorkspaceId(): void
```

##### `resetLogUnmaskedIpsEnabled` <a name="resetLogUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetLogUnmaskedIpsEnabled"></a>

```typescript
public resetLogUnmaskedIpsEnabled(): void
```

##### `resetQueryForResources` <a name="resetQueryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQueryForResources"></a>

```typescript
public resetQueryForResources(): void
```

##### `resetQuerySubscriptionIds` <a name="resetQuerySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetQuerySubscriptionIds"></a>

```typescript
public resetQuerySubscriptionIds(): void
```

##### `resetRecommendationsEnabled` <a name="resetRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetRecommendationsEnabled"></a>

```typescript
public resetRecommendationsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotSecuritySolution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

iotSecuritySolution.IotSecuritySolution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IotSecuritySolution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotSecuritySolution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotSecuritySolution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IotSecuritySolution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace">additionalWorkspace</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled">recommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput">additionalWorkspaceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput">disabledDataSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput">eventsToExportInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput">iothubIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput">logAnalyticsWorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput">logUnmaskedIpsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput">queryForResourcesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput">querySubscriptionIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput">recommendationsEnabledInput</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources">disabledDataSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport">eventsToExport</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds">iothubIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources">queryForResources</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalWorkspace`<sup>Required</sup> <a name="additionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspace"></a>

```typescript
public readonly additionalWorkspace: IotSecuritySolutionAdditionalWorkspaceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList">IotSecuritySolutionAdditionalWorkspaceList</a>

---

##### `recommendationsEnabled`<sup>Required</sup> <a name="recommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabled"></a>

```typescript
public readonly recommendationsEnabled: IotSecuritySolutionRecommendationsEnabledOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference">IotSecuritySolutionRecommendationsEnabledOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeouts"></a>

```typescript
public readonly timeouts: IotSecuritySolutionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference">IotSecuritySolutionTimeoutsOutputReference</a>

---

##### `additionalWorkspaceInput`<sup>Optional</sup> <a name="additionalWorkspaceInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.additionalWorkspaceInput"></a>

```typescript
public readonly additionalWorkspaceInput: IResolvable | IotSecuritySolutionAdditionalWorkspace[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

---

##### `disabledDataSourcesInput`<sup>Optional</sup> <a name="disabledDataSourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSourcesInput"></a>

```typescript
public readonly disabledDataSourcesInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventsToExportInput`<sup>Optional</sup> <a name="eventsToExportInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExportInput"></a>

```typescript
public readonly eventsToExportInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iothubIdsInput`<sup>Optional</sup> <a name="iothubIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIdsInput"></a>

```typescript
public readonly iothubIdsInput: string[];
```

- *Type:* string[]

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="logAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceIdInput"></a>

```typescript
public readonly logAnalyticsWorkspaceIdInput: string;
```

- *Type:* string

---

##### `logUnmaskedIpsEnabledInput`<sup>Optional</sup> <a name="logUnmaskedIpsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabledInput"></a>

```typescript
public readonly logUnmaskedIpsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryForResourcesInput`<sup>Optional</sup> <a name="queryForResourcesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResourcesInput"></a>

```typescript
public readonly queryForResourcesInput: string;
```

- *Type:* string

---

##### `querySubscriptionIdsInput`<sup>Optional</sup> <a name="querySubscriptionIdsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIdsInput"></a>

```typescript
public readonly querySubscriptionIdsInput: string[];
```

- *Type:* string[]

---

##### `recommendationsEnabledInput`<sup>Optional</sup> <a name="recommendationsEnabledInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.recommendationsEnabledInput"></a>

```typescript
public readonly recommendationsEnabledInput: IotSecuritySolutionRecommendationsEnabled;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IotSecuritySolutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---

##### `disabledDataSources`<sup>Required</sup> <a name="disabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.disabledDataSources"></a>

```typescript
public readonly disabledDataSources: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventsToExport`<sup>Required</sup> <a name="eventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.eventsToExport"></a>

```typescript
public readonly eventsToExport: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.iothubIds"></a>

```typescript
public readonly iothubIds: string[];
```

- *Type:* string[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `logAnalyticsWorkspaceId`<sup>Required</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

---

##### `logUnmaskedIpsEnabled`<sup>Required</sup> <a name="logUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.logUnmaskedIpsEnabled"></a>

```typescript
public readonly logUnmaskedIpsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `queryForResources`<sup>Required</sup> <a name="queryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.queryForResources"></a>

```typescript
public readonly queryForResources: string;
```

- *Type:* string

---

##### `querySubscriptionIds`<sup>Required</sup> <a name="querySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.querySubscriptionIds"></a>

```typescript
public readonly querySubscriptionIds: string[];
```

- *Type:* string[]

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotSecuritySolutionAdditionalWorkspace <a name="IotSecuritySolutionAdditionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

const iotSecuritySolutionAdditionalWorkspace: iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes">dataTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}. |

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.dataTypes"></a>

```typescript
public readonly dataTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#data_types IotSecuritySolution#data_types}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#workspace_id IotSecuritySolution#workspace_id}.

---

### IotSecuritySolutionConfig <a name="IotSecuritySolutionConfig" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

const iotSecuritySolutionConfig: iotSecuritySolution.IotSecuritySolutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds">iothubIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace">additionalWorkspace</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]</code> | additional_workspace block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources">disabledDataSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport">eventsToExport</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId">logAnalyticsWorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled">logUnmaskedIpsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources">queryForResources</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds">querySubscriptionIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled">recommendationsEnabled</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | recommendations_enabled block. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#display_name IotSecuritySolution#display_name}.

---

##### `iothubIds`<sup>Required</sup> <a name="iothubIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.iothubIds"></a>

```typescript
public readonly iothubIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#iothub_ids IotSecuritySolution#iothub_ids}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#location IotSecuritySolution#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#name IotSecuritySolution#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#resource_group_name IotSecuritySolution#resource_group_name}.

---

##### `additionalWorkspace`<sup>Optional</sup> <a name="additionalWorkspace" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.additionalWorkspace"></a>

```typescript
public readonly additionalWorkspace: IResolvable | IotSecuritySolutionAdditionalWorkspace[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

additional_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#additional_workspace IotSecuritySolution#additional_workspace}

---

##### `disabledDataSources`<sup>Optional</sup> <a name="disabledDataSources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.disabledDataSources"></a>

```typescript
public readonly disabledDataSources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#disabled_data_sources IotSecuritySolution#disabled_data_sources}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#enabled IotSecuritySolution#enabled}.

---

##### `eventsToExport`<sup>Optional</sup> <a name="eventsToExport" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.eventsToExport"></a>

```typescript
public readonly eventsToExport: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#events_to_export IotSecuritySolution#events_to_export}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#id IotSecuritySolution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logAnalyticsWorkspaceId`<sup>Optional</sup> <a name="logAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logAnalyticsWorkspaceId"></a>

```typescript
public readonly logAnalyticsWorkspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_analytics_workspace_id IotSecuritySolution#log_analytics_workspace_id}.

---

##### `logUnmaskedIpsEnabled`<sup>Optional</sup> <a name="logUnmaskedIpsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.logUnmaskedIpsEnabled"></a>

```typescript
public readonly logUnmaskedIpsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#log_unmasked_ips_enabled IotSecuritySolution#log_unmasked_ips_enabled}.

---

##### `queryForResources`<sup>Optional</sup> <a name="queryForResources" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.queryForResources"></a>

```typescript
public readonly queryForResources: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_for_resources IotSecuritySolution#query_for_resources}.

---

##### `querySubscriptionIds`<sup>Optional</sup> <a name="querySubscriptionIds" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.querySubscriptionIds"></a>

```typescript
public readonly querySubscriptionIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#query_subscription_ids IotSecuritySolution#query_subscription_ids}.

---

##### `recommendationsEnabled`<sup>Optional</sup> <a name="recommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.recommendationsEnabled"></a>

```typescript
public readonly recommendationsEnabled: IotSecuritySolutionRecommendationsEnabled;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

recommendations_enabled block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#recommendations_enabled IotSecuritySolution#recommendations_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#tags IotSecuritySolution#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotSecuritySolutionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#timeouts IotSecuritySolution#timeouts}

---

### IotSecuritySolutionRecommendationsEnabled <a name="IotSecuritySolutionRecommendationsEnabled" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

const iotSecuritySolutionRecommendationsEnabled: iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication">acrAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline">baseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent">installAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts">openPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials">sharedCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}. |

---

##### `acrAuthentication`<sup>Optional</sup> <a name="acrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.acrAuthentication"></a>

```typescript
public readonly acrAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#acr_authentication IotSecuritySolution#acr_authentication}.

---

##### `agentSendUnutilizedMsg`<sup>Optional</sup> <a name="agentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.agentSendUnutilizedMsg"></a>

```typescript
public readonly agentSendUnutilizedMsg: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#agent_send_unutilized_msg IotSecuritySolution#agent_send_unutilized_msg}.

---

##### `baseline`<sup>Optional</sup> <a name="baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.baseline"></a>

```typescript
public readonly baseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#baseline IotSecuritySolution#baseline}.

---

##### `edgeHubMemOptimize`<sup>Optional</sup> <a name="edgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeHubMemOptimize"></a>

```typescript
public readonly edgeHubMemOptimize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_hub_mem_optimize IotSecuritySolution#edge_hub_mem_optimize}.

---

##### `edgeLoggingOption`<sup>Optional</sup> <a name="edgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.edgeLoggingOption"></a>

```typescript
public readonly edgeLoggingOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#edge_logging_option IotSecuritySolution#edge_logging_option}.

---

##### `inconsistentModuleSettings`<sup>Optional</sup> <a name="inconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.inconsistentModuleSettings"></a>

```typescript
public readonly inconsistentModuleSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#inconsistent_module_settings IotSecuritySolution#inconsistent_module_settings}.

---

##### `installAgent`<sup>Optional</sup> <a name="installAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.installAgent"></a>

```typescript
public readonly installAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#install_agent IotSecuritySolution#install_agent}.

---

##### `ipFilterDenyAll`<sup>Optional</sup> <a name="ipFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterDenyAll"></a>

```typescript
public readonly ipFilterDenyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_deny_all IotSecuritySolution#ip_filter_deny_all}.

---

##### `ipFilterPermissiveRule`<sup>Optional</sup> <a name="ipFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.ipFilterPermissiveRule"></a>

```typescript
public readonly ipFilterPermissiveRule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#ip_filter_permissive_rule IotSecuritySolution#ip_filter_permissive_rule}.

---

##### `openPorts`<sup>Optional</sup> <a name="openPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.openPorts"></a>

```typescript
public readonly openPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#open_ports IotSecuritySolution#open_ports}.

---

##### `permissiveFirewallPolicy`<sup>Optional</sup> <a name="permissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveFirewallPolicy"></a>

```typescript
public readonly permissiveFirewallPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_firewall_policy IotSecuritySolution#permissive_firewall_policy}.

---

##### `permissiveInputFirewallRules`<sup>Optional</sup> <a name="permissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveInputFirewallRules"></a>

```typescript
public readonly permissiveInputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_input_firewall_rules IotSecuritySolution#permissive_input_firewall_rules}.

---

##### `permissiveOutputFirewallRules`<sup>Optional</sup> <a name="permissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.permissiveOutputFirewallRules"></a>

```typescript
public readonly permissiveOutputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#permissive_output_firewall_rules IotSecuritySolution#permissive_output_firewall_rules}.

---

##### `privilegedDockerOptions`<sup>Optional</sup> <a name="privilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.privilegedDockerOptions"></a>

```typescript
public readonly privilegedDockerOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#privileged_docker_options IotSecuritySolution#privileged_docker_options}.

---

##### `sharedCredentials`<sup>Optional</sup> <a name="sharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.sharedCredentials"></a>

```typescript
public readonly sharedCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#shared_credentials IotSecuritySolution#shared_credentials}.

---

##### `vulnerableTlsCipherSuite`<sup>Optional</sup> <a name="vulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled.property.vulnerableTlsCipherSuite"></a>

```typescript
public readonly vulnerableTlsCipherSuite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#vulnerable_tls_cipher_suite IotSecuritySolution#vulnerable_tls_cipher_suite}.

---

### IotSecuritySolutionTimeouts <a name="IotSecuritySolutionTimeouts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

const iotSecuritySolutionTimeouts: iotSecuritySolution.IotSecuritySolutionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#create IotSecuritySolution#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#delete IotSecuritySolution#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#read IotSecuritySolution#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.23.0/docs/resources/iot_security_solution#update IotSecuritySolution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotSecuritySolutionAdditionalWorkspaceList <a name="IotSecuritySolutionAdditionalWorkspaceList" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get"></a>

```typescript
public get(index: number): IotSecuritySolutionAdditionalWorkspaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecuritySolutionAdditionalWorkspace[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>[]

---


### IotSecuritySolutionAdditionalWorkspaceOutputReference <a name="IotSecuritySolutionAdditionalWorkspaceOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput">dataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes">dataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataTypesInput`<sup>Optional</sup> <a name="dataTypesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypesInput"></a>

```typescript
public readonly dataTypesInput: string[];
```

- *Type:* string[]

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `dataTypes`<sup>Required</sup> <a name="dataTypes" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.dataTypes"></a>

```typescript
public readonly dataTypes: string[];
```

- *Type:* string[]

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecuritySolutionAdditionalWorkspace;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionAdditionalWorkspace">IotSecuritySolutionAdditionalWorkspace</a>

---


### IotSecuritySolutionRecommendationsEnabledOutputReference <a name="IotSecuritySolutionRecommendationsEnabledOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication">resetAcrAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg">resetAgentSendUnutilizedMsg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline">resetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize">resetEdgeHubMemOptimize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption">resetEdgeLoggingOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings">resetInconsistentModuleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent">resetInstallAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll">resetIpFilterDenyAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule">resetIpFilterPermissiveRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts">resetOpenPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy">resetPermissiveFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules">resetPermissiveInputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules">resetPermissiveOutputFirewallRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions">resetPrivilegedDockerOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials">resetSharedCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite">resetVulnerableTlsCipherSuite</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcrAuthentication` <a name="resetAcrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAcrAuthentication"></a>

```typescript
public resetAcrAuthentication(): void
```

##### `resetAgentSendUnutilizedMsg` <a name="resetAgentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetAgentSendUnutilizedMsg"></a>

```typescript
public resetAgentSendUnutilizedMsg(): void
```

##### `resetBaseline` <a name="resetBaseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetBaseline"></a>

```typescript
public resetBaseline(): void
```

##### `resetEdgeHubMemOptimize` <a name="resetEdgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeHubMemOptimize"></a>

```typescript
public resetEdgeHubMemOptimize(): void
```

##### `resetEdgeLoggingOption` <a name="resetEdgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetEdgeLoggingOption"></a>

```typescript
public resetEdgeLoggingOption(): void
```

##### `resetInconsistentModuleSettings` <a name="resetInconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInconsistentModuleSettings"></a>

```typescript
public resetInconsistentModuleSettings(): void
```

##### `resetInstallAgent` <a name="resetInstallAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetInstallAgent"></a>

```typescript
public resetInstallAgent(): void
```

##### `resetIpFilterDenyAll` <a name="resetIpFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterDenyAll"></a>

```typescript
public resetIpFilterDenyAll(): void
```

##### `resetIpFilterPermissiveRule` <a name="resetIpFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetIpFilterPermissiveRule"></a>

```typescript
public resetIpFilterPermissiveRule(): void
```

##### `resetOpenPorts` <a name="resetOpenPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetOpenPorts"></a>

```typescript
public resetOpenPorts(): void
```

##### `resetPermissiveFirewallPolicy` <a name="resetPermissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveFirewallPolicy"></a>

```typescript
public resetPermissiveFirewallPolicy(): void
```

##### `resetPermissiveInputFirewallRules` <a name="resetPermissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveInputFirewallRules"></a>

```typescript
public resetPermissiveInputFirewallRules(): void
```

##### `resetPermissiveOutputFirewallRules` <a name="resetPermissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPermissiveOutputFirewallRules"></a>

```typescript
public resetPermissiveOutputFirewallRules(): void
```

##### `resetPrivilegedDockerOptions` <a name="resetPrivilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetPrivilegedDockerOptions"></a>

```typescript
public resetPrivilegedDockerOptions(): void
```

##### `resetSharedCredentials` <a name="resetSharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetSharedCredentials"></a>

```typescript
public resetSharedCredentials(): void
```

##### `resetVulnerableTlsCipherSuite` <a name="resetVulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.resetVulnerableTlsCipherSuite"></a>

```typescript
public resetVulnerableTlsCipherSuite(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput">acrAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput">agentSendUnutilizedMsgInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput">baselineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput">edgeHubMemOptimizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput">edgeLoggingOptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput">inconsistentModuleSettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput">installAgentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput">ipFilterDenyAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput">ipFilterPermissiveRuleInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput">openPortsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput">permissiveFirewallPolicyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput">permissiveInputFirewallRulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput">permissiveOutputFirewallRulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput">privilegedDockerOptionsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput">sharedCredentialsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput">vulnerableTlsCipherSuiteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication">acrAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg">agentSendUnutilizedMsg</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline">baseline</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize">edgeHubMemOptimize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption">edgeLoggingOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings">inconsistentModuleSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent">installAgent</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll">ipFilterDenyAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule">ipFilterPermissiveRule</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts">openPorts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy">permissiveFirewallPolicy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules">permissiveInputFirewallRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules">permissiveOutputFirewallRules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions">privilegedDockerOptions</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials">sharedCredentials</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite">vulnerableTlsCipherSuite</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acrAuthenticationInput`<sup>Optional</sup> <a name="acrAuthenticationInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthenticationInput"></a>

```typescript
public readonly acrAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `agentSendUnutilizedMsgInput`<sup>Optional</sup> <a name="agentSendUnutilizedMsgInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsgInput"></a>

```typescript
public readonly agentSendUnutilizedMsgInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baselineInput`<sup>Optional</sup> <a name="baselineInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baselineInput"></a>

```typescript
public readonly baselineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeHubMemOptimizeInput`<sup>Optional</sup> <a name="edgeHubMemOptimizeInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimizeInput"></a>

```typescript
public readonly edgeHubMemOptimizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeLoggingOptionInput`<sup>Optional</sup> <a name="edgeLoggingOptionInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOptionInput"></a>

```typescript
public readonly edgeLoggingOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inconsistentModuleSettingsInput`<sup>Optional</sup> <a name="inconsistentModuleSettingsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettingsInput"></a>

```typescript
public readonly inconsistentModuleSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `installAgentInput`<sup>Optional</sup> <a name="installAgentInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgentInput"></a>

```typescript
public readonly installAgentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipFilterDenyAllInput`<sup>Optional</sup> <a name="ipFilterDenyAllInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAllInput"></a>

```typescript
public readonly ipFilterDenyAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipFilterPermissiveRuleInput`<sup>Optional</sup> <a name="ipFilterPermissiveRuleInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRuleInput"></a>

```typescript
public readonly ipFilterPermissiveRuleInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openPortsInput`<sup>Optional</sup> <a name="openPortsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPortsInput"></a>

```typescript
public readonly openPortsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permissiveFirewallPolicyInput`<sup>Optional</sup> <a name="permissiveFirewallPolicyInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicyInput"></a>

```typescript
public readonly permissiveFirewallPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permissiveInputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveInputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRulesInput"></a>

```typescript
public readonly permissiveInputFirewallRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permissiveOutputFirewallRulesInput`<sup>Optional</sup> <a name="permissiveOutputFirewallRulesInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRulesInput"></a>

```typescript
public readonly permissiveOutputFirewallRulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privilegedDockerOptionsInput`<sup>Optional</sup> <a name="privilegedDockerOptionsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptionsInput"></a>

```typescript
public readonly privilegedDockerOptionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedCredentialsInput`<sup>Optional</sup> <a name="sharedCredentialsInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentialsInput"></a>

```typescript
public readonly sharedCredentialsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnerableTlsCipherSuiteInput`<sup>Optional</sup> <a name="vulnerableTlsCipherSuiteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuiteInput"></a>

```typescript
public readonly vulnerableTlsCipherSuiteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `acrAuthentication`<sup>Required</sup> <a name="acrAuthentication" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.acrAuthentication"></a>

```typescript
public readonly acrAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `agentSendUnutilizedMsg`<sup>Required</sup> <a name="agentSendUnutilizedMsg" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.agentSendUnutilizedMsg"></a>

```typescript
public readonly agentSendUnutilizedMsg: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseline`<sup>Required</sup> <a name="baseline" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.baseline"></a>

```typescript
public readonly baseline: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeHubMemOptimize`<sup>Required</sup> <a name="edgeHubMemOptimize" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeHubMemOptimize"></a>

```typescript
public readonly edgeHubMemOptimize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `edgeLoggingOption`<sup>Required</sup> <a name="edgeLoggingOption" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.edgeLoggingOption"></a>

```typescript
public readonly edgeLoggingOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `inconsistentModuleSettings`<sup>Required</sup> <a name="inconsistentModuleSettings" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.inconsistentModuleSettings"></a>

```typescript
public readonly inconsistentModuleSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `installAgent`<sup>Required</sup> <a name="installAgent" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.installAgent"></a>

```typescript
public readonly installAgent: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipFilterDenyAll`<sup>Required</sup> <a name="ipFilterDenyAll" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterDenyAll"></a>

```typescript
public readonly ipFilterDenyAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipFilterPermissiveRule`<sup>Required</sup> <a name="ipFilterPermissiveRule" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.ipFilterPermissiveRule"></a>

```typescript
public readonly ipFilterPermissiveRule: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `openPorts`<sup>Required</sup> <a name="openPorts" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.openPorts"></a>

```typescript
public readonly openPorts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permissiveFirewallPolicy`<sup>Required</sup> <a name="permissiveFirewallPolicy" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveFirewallPolicy"></a>

```typescript
public readonly permissiveFirewallPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permissiveInputFirewallRules`<sup>Required</sup> <a name="permissiveInputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveInputFirewallRules"></a>

```typescript
public readonly permissiveInputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `permissiveOutputFirewallRules`<sup>Required</sup> <a name="permissiveOutputFirewallRules" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.permissiveOutputFirewallRules"></a>

```typescript
public readonly permissiveOutputFirewallRules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privilegedDockerOptions`<sup>Required</sup> <a name="privilegedDockerOptions" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.privilegedDockerOptions"></a>

```typescript
public readonly privilegedDockerOptions: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedCredentials`<sup>Required</sup> <a name="sharedCredentials" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.sharedCredentials"></a>

```typescript
public readonly sharedCredentials: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vulnerableTlsCipherSuite`<sup>Required</sup> <a name="vulnerableTlsCipherSuite" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.vulnerableTlsCipherSuite"></a>

```typescript
public readonly vulnerableTlsCipherSuite: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotSecuritySolutionRecommendationsEnabled;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionRecommendationsEnabled">IotSecuritySolutionRecommendationsEnabled</a>

---


### IotSecuritySolutionTimeoutsOutputReference <a name="IotSecuritySolutionTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotSecuritySolution } from '@cdktf/provider-azurerm'

new iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotSecuritySolutionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotSecuritySolution.IotSecuritySolutionTimeouts">IotSecuritySolutionTimeouts</a>

---



