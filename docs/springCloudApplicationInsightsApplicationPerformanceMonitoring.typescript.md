# `springCloudApplicationInsightsApplicationPerformanceMonitoring` Submodule <a name="`springCloudApplicationInsightsApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoring <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring azurerm_spring_cloud_application_insights_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

new springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring(scope: Construct, id: string, config: SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig">SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig">SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleInstance">resetRoleInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleName">resetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingPercentage">resetSamplingPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingRequestsPerSecond">resetSamplingRequestsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetConnectionString` <a name="resetConnectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```typescript
public resetGloballyEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoleInstance` <a name="resetRoleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleInstance"></a>

```typescript
public resetRoleInstance(): void
```

##### `resetRoleName` <a name="resetRoleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetRoleName"></a>

```typescript
public resetRoleName(): void
```

##### `resetSamplingPercentage` <a name="resetSamplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingPercentage"></a>

```typescript
public resetSamplingPercentage(): void
```

##### `resetSamplingRequestsPerSecond` <a name="resetSamplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetSamplingRequestsPerSecond"></a>

```typescript
public resetSamplingRequestsPerSecond(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudApplicationInsightsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudApplicationInsightsApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudApplicationInsightsApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudApplicationInsightsApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudApplicationInsightsApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstanceInput">roleInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentageInput">samplingPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecondInput">samplingRequestsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstance">roleInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecond">samplingRequestsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```typescript
public readonly globallyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `roleInstanceInput`<sup>Optional</sup> <a name="roleInstanceInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstanceInput"></a>

```typescript
public readonly roleInstanceInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `samplingPercentageInput`<sup>Optional</sup> <a name="samplingPercentageInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentageInput"></a>

```typescript
public readonly samplingPercentageInput: number;
```

- *Type:* number

---

##### `samplingRequestsPerSecondInput`<sup>Optional</sup> <a name="samplingRequestsPerSecondInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecondInput"></a>

```typescript
public readonly samplingRequestsPerSecondInput: number;
```

- *Type:* number

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```typescript
public readonly springCloudServiceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```typescript
public readonly globallyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleInstance`<sup>Required</sup> <a name="roleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleInstance"></a>

```typescript
public readonly roleInstance: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `samplingPercentage`<sup>Required</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

---

##### `samplingRequestsPerSecond`<sup>Required</sup> <a name="samplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.samplingRequestsPerSecond"></a>

```typescript
public readonly samplingRequestsPerSecond: number;
```

- *Type:* number

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoring.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.Initializer"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

const springCloudApplicationInsightsApplicationPerformanceMonitoringConfig: springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleInstance">roleInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingPercentage">samplingPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingRequestsPerSecond">samplingRequestsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#spring_cloud_service_id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#connection_string SpringCloudApplicationInsightsApplicationPerformanceMonitoring#connection_string}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```typescript
public readonly globallyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#globally_enabled SpringCloudApplicationInsightsApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#id SpringCloudApplicationInsightsApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `roleInstance`<sup>Optional</sup> <a name="roleInstance" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleInstance"></a>

```typescript
public readonly roleInstance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_instance SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_instance}.

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#role_name SpringCloudApplicationInsightsApplicationPerformanceMonitoring#role_name}.

---

##### `samplingPercentage`<sup>Optional</sup> <a name="samplingPercentage" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingPercentage"></a>

```typescript
public readonly samplingPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_percentage SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_percentage}.

---

##### `samplingRequestsPerSecond`<sup>Optional</sup> <a name="samplingRequestsPerSecond" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.samplingRequestsPerSecond"></a>

```typescript
public readonly samplingRequestsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#sampling_requests_per_second SpringCloudApplicationInsightsApplicationPerformanceMonitoring#sampling_requests_per_second}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#timeouts SpringCloudApplicationInsightsApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

const springCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts: springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#create SpringCloudApplicationInsightsApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#delete SpringCloudApplicationInsightsApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#read SpringCloudApplicationInsightsApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#update SpringCloudApplicationInsightsApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#create SpringCloudApplicationInsightsApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#delete SpringCloudApplicationInsightsApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#read SpringCloudApplicationInsightsApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/resources/spring_cloud_application_insights_application_performance_monitoring#update SpringCloudApplicationInsightsApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudApplicationInsightsApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

new springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudApplicationInsightsApplicationPerformanceMonitoring.SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts">SpringCloudApplicationInsightsApplicationPerformanceMonitoringTimeouts</a>

---



