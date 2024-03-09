# `springCloudDynatraceApplicationPerformanceMonitoring` Submodule <a name="`springCloudDynatraceApplicationPerformanceMonitoring` Submodule" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoring <a name="SpringCloudDynatraceApplicationPerformanceMonitoring" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring azurerm_spring_cloud_dynatrace_application_performance_monitoring}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

new springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring(scope: Construct, id: string, config: SpringCloudDynatraceApplicationPerformanceMonitoringConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig">SpringCloudDynatraceApplicationPerformanceMonitoringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig">SpringCloudDynatraceApplicationPerformanceMonitoringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken">resetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl">resetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled">resetGloballyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts"></a>

```typescript
public putTimeouts(value: SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---

##### `resetApiToken` <a name="resetApiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiToken"></a>

```typescript
public resetApiToken(): void
```

##### `resetApiUrl` <a name="resetApiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetApiUrl"></a>

```typescript
public resetApiUrl(): void
```

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetEnvironmentId"></a>

```typescript
public resetEnvironmentId(): void
```

##### `resetGloballyEnabled` <a name="resetGloballyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetGloballyEnabled"></a>

```typescript
public resetGloballyEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SpringCloudDynatraceApplicationPerformanceMonitoring resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SpringCloudDynatraceApplicationPerformanceMonitoring to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SpringCloudDynatraceApplicationPerformanceMonitoring that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SpringCloudDynatraceApplicationPerformanceMonitoring to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput">apiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput">connectionPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput">globallyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput">springCloudServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput">tenantTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl">apiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint">connectionPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled">globallyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken">tenantToken</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference">SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference</a>

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `apiUrlInput`<sup>Optional</sup> <a name="apiUrlInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrlInput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* string

---

##### `connectionPointInput`<sup>Optional</sup> <a name="connectionPointInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPointInput"></a>

```typescript
public readonly connectionPointInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `globallyEnabledInput`<sup>Optional</sup> <a name="globallyEnabledInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabledInput"></a>

```typescript
public readonly globallyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `springCloudServiceIdInput`<sup>Optional</sup> <a name="springCloudServiceIdInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceIdInput"></a>

```typescript
public readonly springCloudServiceIdInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `tenantTokenInput`<sup>Optional</sup> <a name="tenantTokenInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantTokenInput"></a>

```typescript
public readonly tenantTokenInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `apiUrl`<sup>Required</sup> <a name="apiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

---

##### `connectionPoint`<sup>Required</sup> <a name="connectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.connectionPoint"></a>

```typescript
public readonly connectionPoint: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `globallyEnabled`<sup>Required</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.globallyEnabled"></a>

```typescript
public readonly globallyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

##### `tenantToken`<sup>Required</sup> <a name="tenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tenantToken"></a>

```typescript
public readonly tenantToken: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoring.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringConfig <a name="SpringCloudDynatraceApplicationPerformanceMonitoringConfig" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.Initializer"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

const springCloudDynatraceApplicationPerformanceMonitoringConfig: springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint">connectionPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId">springCloudServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant">tenant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken">tenantToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken">apiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl">apiUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId">environmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled">globallyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connectionPoint`<sup>Required</sup> <a name="connectionPoint" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.connectionPoint"></a>

```typescript
public readonly connectionPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#connection_point SpringCloudDynatraceApplicationPerformanceMonitoring#connection_point}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#name SpringCloudDynatraceApplicationPerformanceMonitoring#name}.

---

##### `springCloudServiceId`<sup>Required</sup> <a name="springCloudServiceId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.springCloudServiceId"></a>

```typescript
public readonly springCloudServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#spring_cloud_service_id SpringCloudDynatraceApplicationPerformanceMonitoring#spring_cloud_service_id}.

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant SpringCloudDynatraceApplicationPerformanceMonitoring#tenant}.

---

##### `tenantToken`<sup>Required</sup> <a name="tenantToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.tenantToken"></a>

```typescript
public readonly tenantToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#tenant_token SpringCloudDynatraceApplicationPerformanceMonitoring#tenant_token}.

---

##### `apiToken`<sup>Optional</sup> <a name="apiToken" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_token SpringCloudDynatraceApplicationPerformanceMonitoring#api_token}.

---

##### `apiUrl`<sup>Optional</sup> <a name="apiUrl" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.apiUrl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#api_url SpringCloudDynatraceApplicationPerformanceMonitoring#api_url}.

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#environment_id SpringCloudDynatraceApplicationPerformanceMonitoring#environment_id}.

---

##### `globallyEnabled`<sup>Optional</sup> <a name="globallyEnabled" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.globallyEnabled"></a>

```typescript
public readonly globallyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#globally_enabled SpringCloudDynatraceApplicationPerformanceMonitoring#globally_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#id SpringCloudDynatraceApplicationPerformanceMonitoring#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#timeouts SpringCloudDynatraceApplicationPerformanceMonitoring#timeouts}

---

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.Initializer"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

const springCloudDynatraceApplicationPerformanceMonitoringTimeouts: springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#create SpringCloudDynatraceApplicationPerformanceMonitoring#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#delete SpringCloudDynatraceApplicationPerformanceMonitoring#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#read SpringCloudDynatraceApplicationPerformanceMonitoring#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/spring_cloud_dynatrace_application_performance_monitoring#update SpringCloudDynatraceApplicationPerformanceMonitoring#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference <a name="SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer"></a>

```typescript
import { springCloudDynatraceApplicationPerformanceMonitoring } from '@cdktf/provider-azurerm'

new springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.springCloudDynatraceApplicationPerformanceMonitoring.SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts">SpringCloudDynatraceApplicationPerformanceMonitoringTimeouts</a>

---



