# `azurerm_iot_time_series_insights_access_policy`

Refer to the Terraform Registory for docs: [`azurerm_iot_time_series_insights_access_policy`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy).

# `iotTimeSeriesInsightsAccessPolicy` Submodule <a name="`iotTimeSeriesInsightsAccessPolicy` Submodule" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTimeSeriesInsightsAccessPolicy <a name="IotTimeSeriesInsightsAccessPolicy" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy azurerm_iot_time_series_insights_access_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy(scope: Construct, id: string, config: IotTimeSeriesInsightsAccessPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig">IotTimeSeriesInsightsAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig">IotTimeSeriesInsightsAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: IotTimeSeriesInsightsAccessPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput">principalObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput">timeSeriesInsightsEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId">principalObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference">IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `principalObjectIdInput`<sup>Optional</sup> <a name="principalObjectIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectIdInput"></a>

```typescript
public readonly principalObjectIdInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IotTimeSeriesInsightsAccessPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

---

##### `timeSeriesInsightsEnvironmentIdInput`<sup>Optional</sup> <a name="timeSeriesInsightsEnvironmentIdInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentIdInput"></a>

```typescript
public readonly timeSeriesInsightsEnvironmentIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.timeSeriesInsightsEnvironmentId"></a>

```typescript
public readonly timeSeriesInsightsEnvironmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTimeSeriesInsightsAccessPolicyConfig <a name="IotTimeSeriesInsightsAccessPolicyConfig" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsAccessPolicyConfig: iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId">principalObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles">roles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId">timeSeriesInsightsEnvironmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#name IotTimeSeriesInsightsAccessPolicy#name}.

---

##### `principalObjectId`<sup>Required</sup> <a name="principalObjectId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.principalObjectId"></a>

```typescript
public readonly principalObjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#principal_object_id IotTimeSeriesInsightsAccessPolicy#principal_object_id}.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#roles IotTimeSeriesInsightsAccessPolicy#roles}.

---

##### `timeSeriesInsightsEnvironmentId`<sup>Required</sup> <a name="timeSeriesInsightsEnvironmentId" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeSeriesInsightsEnvironmentId"></a>

```typescript
public readonly timeSeriesInsightsEnvironmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#time_series_insights_environment_id IotTimeSeriesInsightsAccessPolicy#time_series_insights_environment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#description IotTimeSeriesInsightsAccessPolicy#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#id IotTimeSeriesInsightsAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IotTimeSeriesInsightsAccessPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#timeouts IotTimeSeriesInsightsAccessPolicy#timeouts}

---

### IotTimeSeriesInsightsAccessPolicyTimeouts <a name="IotTimeSeriesInsightsAccessPolicyTimeouts" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

const iotTimeSeriesInsightsAccessPolicyTimeouts: iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#create IotTimeSeriesInsightsAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#delete IotTimeSeriesInsightsAccessPolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#read IotTimeSeriesInsightsAccessPolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/resources/iot_time_series_insights_access_policy#update IotTimeSeriesInsightsAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference <a name="IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { iotTimeSeriesInsightsAccessPolicy } from '@cdktf/provider-azurerm'

new iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTimeSeriesInsightsAccessPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.iotTimeSeriesInsightsAccessPolicy.IotTimeSeriesInsightsAccessPolicyTimeouts">IotTimeSeriesInsightsAccessPolicyTimeouts</a>

---



